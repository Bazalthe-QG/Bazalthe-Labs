import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../lib/prisma.js'
import { sendOtpEmail } from '../lib/mailer.js'
import { requireAuth, type AuthRequest } from '../middleware/auth.js'

const router = Router()
const SECRET = process.env.JWT_SECRET ?? 'bazalthe-labs-dev-secret'

function signToken(id: string, role: string) {
  return jwt.sign({ id, role }, SECRET, { expiresIn: '30d' })
}

// POST /auth/register
router.post('/register', async (req, res) => {
  try {
    const { email, name, password } = req.body as {
      email: string
      name: string
      password: string
    }
    if (!email || !name || !password) {
      res.status(400).json({ error: 'Missing fields' })
      return
    }
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      res.status(409).json({ error: 'Email already in use' })
      return
    }
    // First registered user becomes admin
    const count = await prisma.user.count()
    const role = count === 0 ? 'admin' : 'user'
    const hashed = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: { email, name, password: hashed, role },
      select: { id: true, email: true, name: true, role: true, frozen: true, createdAt: true },
    })
    res.status(201).json({ token: signToken(user.id, user.role), user })
  } catch {
    res.status(500).json({ error: 'Server error' })
  }
})

// POST /auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body as { email: string; password: string }
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' })
      return
    }
    if (user.frozen) {
      res.status(403).json({ error: 'Account frozen' })
      return
    }
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      res.status(401).json({ error: 'Invalid credentials' })
      return
    }
    const { password: _pw, ...safeUser } = user
    res.json({ token: signToken(user.id, user.role), user: safeUser })
  } catch {
    res.status(500).json({ error: 'Server error' })
  }
})

// GET /auth/me
router.get('/me', requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, email: true, name: true, role: true, frozen: true, createdAt: true },
  })
  if (!user || user.frozen) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }
  res.json(user)
})

// POST /auth/send-otp  — step 1: request a sign-in code
router.post('/send-otp', async (req, res) => {
  try {
    const { email } = req.body as { email: string }
    if (!email || !email.includes('@')) {
      res.status(400).json({ error: 'Valid email required' })
      return
    }
    const normalised = email.toLowerCase().trim()

    // Rate-limit: one OTP per 60 seconds per email
    const recent = await prisma.loginToken.findFirst({
      where: {
        email: normalised,
        used: false,
        createdAt: { gte: new Date(Date.now() - 60_000) },
      },
    })
    if (recent) {
      res.status(429).json({ error: 'Please wait a moment before requesting another code.' })
      return
    }

    // Invalidate any older unused tokens for this email
    await prisma.loginToken.deleteMany({ where: { email: normalised } })

    // Generate 6-digit code
    const code = String(Math.floor(100_000 + Math.random() * 900_000))
    const expiresAt = new Date(Date.now() + 15 * 60_000)

    await prisma.loginToken.create({ data: { email: normalised, code, expiresAt } })

    try {
      await sendOtpEmail(normalised, code)
    } catch (mailErr) {
      // In dev/test mode Resend only allows sending to the owner's email.
      // Log the OTP in the terminal so you can still test locally.
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[send-otp] Email delivery failed (dev mode). OTP for ${normalised}: ${code}`)
      } else {
        throw mailErr
      }
    }

    // Always return success (don't reveal whether the email is registered)
    res.json({ sent: true })
  } catch (err) {
    console.error('[send-otp]', err)
    res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
})

// POST /auth/verify-otp  — step 2: verify code and get JWT
router.post('/verify-otp', async (req, res) => {
  try {
    const { email, code } = req.body as { email: string; code: string }
    if (!email || !code) {
      res.status(400).json({ error: 'Missing fields' })
      return
    }
    const normalised = email.toLowerCase().trim()

    const token = await prisma.loginToken.findFirst({
      where: {
        email: normalised,
        code,
        used: false,
        expiresAt: { gt: new Date() },
      },
    })

    if (!token) {
      res.status(401).json({ error: 'Invalid or expired code.' })
      return
    }

    // Mark token as used
    await prisma.loginToken.update({ where: { id: token.id }, data: { used: true } })

    // Find or create user
    let user = await prisma.user.findUnique({ where: { email: normalised } })
    if (!user) {
      // First registered user becomes admin
      const count = await prisma.user.count()
      const role = count === 0 ? 'admin' : 'user'
      const defaultName = normalised.split('@')[0]
      user = await prisma.user.create({
        data: { email: normalised, name: defaultName, role },
      })
    }

    if (user.frozen) {
      res.status(403).json({ error: 'Account frozen' })
      return
    }

    const { password: _pw, ...safeUser } = user
    res.json({ token: signToken(user.id, user.role), user: safeUser })
  } catch (err) {
    console.error('[verify-otp]', err)
    res.status(500).json({ error: 'Server error' })
  }
})

export default router
