import { Router } from 'express'
import { prisma } from '../lib/prisma.js'
import { requireAuth, requireAdmin, type AuthRequest } from '../middleware/auth.js'

const router = Router()
router.use(requireAuth)

// GET /concepts — all concepts (any authenticated user)
router.get('/', async (_req, res) => {
  const concepts = await prisma.concept.findMany({ orderBy: { createdAt: 'asc' } })
  res.json(concepts)
})

// POST /concepts — admin only
router.post('/', requireAdmin, async (_req: AuthRequest, res) => {
  const { label, description } = _req.body as { label: string; description?: string }
  if (!label?.trim()) {
    res.status(400).json({ error: 'Label required' })
    return
  }
  try {
    const concept = await prisma.concept.create({
      data: { label: label.trim(), description: description?.trim() ?? '' },
    })
    res.status(201).json(concept)
  } catch {
    res.status(409).json({ error: 'Label already exists' })
  }
})

// DELETE /concepts/:id — admin only
router.delete('/:id', requireAdmin, async (_req: AuthRequest, res) => {
  try {
    await prisma.concept.delete({ where: { id: _req.params.id } })
    res.status(204).send()
  } catch {
    res.status(404).json({ error: 'Not found' })
  }
})

export default router
