import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { api, type Project, type ProjectItem, type Concept } from '../lib/api'
import { useAuth } from './AuthContext'

interface DbCtx {
  // Projects
  projects: Project[]
  projectItems: Record<string, ProjectItem[]> // projectId → items
  addProject: (name: string) => Promise<Project>
  deleteProject: (id: string) => Promise<void>
  addToProject: (
    projectId: string,
    exampleId: string,
    label: string,
    category: string
  ) => Promise<void>
  removeFromProject: (projectId: string, exampleId: string) => Promise<void>
  // Concepts
  concepts: Concept[]
  addConcept: (label: string, description?: string) => Promise<Concept>
  deleteConcept: (id: string) => Promise<void>
  // Reload
  reload: () => Promise<void>
}

const Ctx = createContext<DbCtx | null>(null)

export function DbProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [projects, setProjects] = useState<Project[]>([])
  const [concepts, setConcepts] = useState<Concept[]>([])

  const load = useCallback(async () => {
    if (!user) return
    try {
      const [p, c] = await Promise.all([api.listProjects(), api.listConcepts()])
      setProjects(p)
      setConcepts(c)
    } catch {
      // Server unavailable — keep empty lists
    }
  }, [user])

  useEffect(() => {
    void load()
  }, [load])

  const projectItems: Record<string, ProjectItem[]> = {}
  for (const p of projects) {
    projectItems[p.id] = p.items
  }

  const addProject = async (name: string) => {
    const p = await api.createProject(name)
    setProjects((prev) => [...prev, p])
    return p
  }

  const deleteProject = async (id: string) => {
    await api.deleteProject(id)
    setProjects((prev) => prev.filter((p) => p.id !== id))
  }

  const addToProject = async (
    projectId: string,
    exampleId: string,
    label: string,
    category: string
  ) => {
    const item = await api.addToProject(projectId, exampleId, label, category)
    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectId
          ? {
              ...p,
              items: p.items.some((i) => i.exampleId === exampleId) ? p.items : [...p.items, item],
            }
          : p
      )
    )
  }

  const removeFromProject = async (projectId: string, exampleId: string) => {
    await api.removeFromProject(projectId, exampleId)
    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectId ? { ...p, items: p.items.filter((i) => i.exampleId !== exampleId) } : p
      )
    )
  }

  const addConcept = async (label: string, description?: string) => {
    const c = await api.createConcept(label, description)
    setConcepts((prev) => [...prev, c])
    return c
  }

  const deleteConcept = async (id: string) => {
    await api.deleteConcept(id)
    setConcepts((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <Ctx.Provider
      value={{
        projects,
        projectItems,
        addProject,
        deleteProject,
        addToProject,
        removeFromProject,
        concepts,
        addConcept,
        deleteConcept,
        reload: load,
      }}
    >
      {children}
    </Ctx.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDb() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useDb must be inside DbProvider')
  return ctx
}
