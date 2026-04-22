import { Router } from 'express'
import { prisma } from '../lib/prisma.js'
import { requireAuth, type AuthRequest } from '../middleware/auth.js'

const router = Router()
router.use(requireAuth)

// GET /projects — current user's projects with their items
router.get('/', async (req: AuthRequest, res) => {
  const projects = await prisma.project.findMany({
    where: { userId: req.userId },
    include: { items: true },
    orderBy: { createdAt: 'asc' },
  })
  res.json(projects)
})

// POST /projects
router.post('/', async (req: AuthRequest, res) => {
  const { name } = req.body as { name: string }
  if (!name?.trim()) {
    res.status(400).json({ error: 'Name required' })
    return
  }
  const project = await prisma.project.create({
    data: { name: name.trim(), userId: req.userId! },
    include: { items: true },
  })
  res.status(201).json(project)
})

// DELETE /projects/:id
router.delete('/:id', async (req: AuthRequest, res) => {
  const project = await prisma.project.findUnique({ where: { id: req.params.id } })
  if (!project || project.userId !== req.userId) {
    res.status(404).json({ error: 'Not found' })
    return
  }
  await prisma.project.delete({ where: { id: req.params.id } })
  res.status(204).send()
})

// POST /projects/:id/items — add an example to a project
router.post('/:id/items', async (req: AuthRequest, res) => {
  const project = await prisma.project.findUnique({ where: { id: req.params.id } })
  if (!project || project.userId !== req.userId) {
    res.status(404).json({ error: 'Not found' })
    return
  }
  const { exampleId, label, category } = req.body as {
    exampleId: string
    label: string
    category: string
  }
  try {
    const item = await prisma.projectItem.create({
      data: { exampleId, label, category, projectId: req.params.id },
    })
    res.status(201).json(item)
  } catch {
    // Already exists — return 200
    const item = await prisma.projectItem.findUnique({
      where: { projectId_exampleId: { projectId: req.params.id, exampleId } },
    })
    res.json(item)
  }
})

// DELETE /projects/:id/items/:exampleId
router.delete('/:id/items/:exampleId', async (req: AuthRequest, res) => {
  const project = await prisma.project.findUnique({ where: { id: req.params.id } })
  if (!project || project.userId !== req.userId) {
    res.status(404).json({ error: 'Not found' })
    return
  }
  try {
    await prisma.projectItem.delete({
      where: {
        projectId_exampleId: { projectId: req.params.id, exampleId: req.params.exampleId },
      },
    })
  } catch {
    // Already deleted
  }
  res.status(204).send()
})

export default router
