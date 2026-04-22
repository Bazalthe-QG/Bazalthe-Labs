import { Router } from 'express'
import { prisma } from '../lib/prisma.js'
import { requireAuth, requireAdmin, type AuthRequest } from '../middleware/auth.js'

const router = Router()

// All user routes require auth + admin
router.use(requireAuth, requireAdmin)

// GET /users
router.get('/', async (_req, res) => {
  const users = await prisma.user.findMany({
    select: { id: true, email: true, name: true, role: true, frozen: true, createdAt: true },
    orderBy: { createdAt: 'asc' },
  })
  res.json(users)
})

// PATCH /users/:id — update role or frozen
router.patch('/:id', async (req: AuthRequest, res) => {
  const { id } = req.params
  const { role, frozen, name } = req.body as {
    role?: string
    frozen?: boolean
    name?: string
  }
  // Prevent self-demotion
  if (id === req.userId && role === 'user') {
    res.status(400).json({ error: 'Cannot demote yourself' })
    return
  }
  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        ...(role !== undefined && { role }),
        ...(frozen !== undefined && { frozen }),
        ...(name !== undefined && { name }),
      },
      select: { id: true, email: true, name: true, role: true, frozen: true, createdAt: true },
    })
    res.json(user)
  } catch {
    res.status(404).json({ error: 'User not found' })
  }
})

// DELETE /users/:id
router.delete('/:id', async (req: AuthRequest, res) => {
  if (req.params.id === req.userId) {
    res.status(400).json({ error: 'Cannot delete yourself' })
    return
  }
  try {
    await prisma.user.delete({ where: { id: req.params.id } })
    res.status(204).send()
  } catch {
    res.status(404).json({ error: 'User not found' })
  }
})

export default router
