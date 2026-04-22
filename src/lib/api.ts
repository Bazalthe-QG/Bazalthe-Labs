const BASE =
  (import.meta as { env: { VITE_API_URL?: string } }).env.VITE_API_URL ?? 'http://localhost:3001'

function token() {
  return localStorage.getItem('uilab:token') ?? ''
}

async function request<T>(method: string, path: string, body?: unknown, auth = true): Promise<T> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (auth) headers['Authorization'] = `Bearer ${token()}`
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  if (res.status === 204) return undefined as T
  const data = await res.json()
  if (!res.ok) throw new Error(data.error ?? 'Request failed')
  return data as T
}

export const api = {
  // Auth — OTP flow
  sendOtp: (email: string) =>
    request<{ sent: boolean }>('POST', '/auth/send-otp', { email }, false),
  verifyOtp: (email: string, code: string) =>
    request<{ token: string; user: User }>('POST', '/auth/verify-otp', { email, code }, false),

  // Auth — legacy password flow (kept for compatibility)
  login: (email: string, password: string) =>
    request<{ token: string; user: User }>('POST', '/auth/login', { email, password }, false),
  register: (email: string, name: string, password: string) =>
    request<{ token: string; user: User }>(
      'POST',
      '/auth/register',
      { email, name, password },
      false
    ),
  me: () => request<User>('GET', '/auth/me'),

  // Users (admin)
  listUsers: () => request<User[]>('GET', '/users'),
  updateUser: (id: string, data: Partial<Pick<User, 'role' | 'frozen' | 'name'>>) =>
    request<User>('PATCH', `/users/${id}`, data),
  deleteUser: (id: string) => request<void>('DELETE', `/users/${id}`),

  // Projects
  listProjects: () => request<Project[]>('GET', '/projects'),
  createProject: (name: string) => request<Project>('POST', '/projects', { name }),
  deleteProject: (id: string) => request<void>('DELETE', `/projects/${id}`),
  addToProject: (projectId: string, exampleId: string, label: string, category: string) =>
    request<ProjectItem>('POST', `/projects/${projectId}/items`, { exampleId, label, category }),
  removeFromProject: (projectId: string, exampleId: string) =>
    request<void>('DELETE', `/projects/${projectId}/items/${exampleId}`),

  // Concepts
  listConcepts: () => request<Concept[]>('GET', '/concepts'),
  createConcept: (label: string, description?: string) =>
    request<Concept>('POST', '/concepts', { label, description }),
  deleteConcept: (id: string) => request<void>('DELETE', `/concepts/${id}`),
}

// Shared types (mirrors Prisma output)
export interface User {
  id: string
  email: string
  name: string
  role: string
  frozen: boolean
  createdAt: string
}

export interface Project {
  id: string
  name: string
  createdAt: string
  userId: string
  items: ProjectItem[]
}

export interface ProjectItem {
  id: string
  exampleId: string
  label: string
  category: string
  projectId: string
}

export interface Concept {
  id: string
  label: string
  description: string
  createdAt: string
}
