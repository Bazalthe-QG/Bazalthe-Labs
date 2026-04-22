import { useState } from 'react'
import { useDb } from '../../context/DbContext'
import { useFavorites } from '../../context/FavoritesContext'

interface Props {
  onClose: () => void
}

export default function ProjectModal({ onClose }: Props) {
  const { projects, projectItems, createProject, deleteProject } = useDb()
  const { currentProject, setCurrentProject } = useFavorites()
  const [newName, setNewName] = useState('')
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState('')

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName.trim()) return
    setCreating(true)
    setError('')
    try {
      await createProject(newName.trim())
      setNewName('')
    } catch {
      setError('Failed to create project')
    } finally {
      setCreating(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[9990] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.5)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="w-full max-w-md rounded-2xl border shadow-2xl flex flex-col overflow-hidden"
        style={{
          background: 'var(--c-surface)',
          borderColor: 'var(--c-border)',
          maxHeight: '80vh',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: 'var(--c-border)' }}
        >
          <h2 className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>
            Projects
          </h2>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition hover:opacity-70"
            style={{ color: 'var(--c-muted)' }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Project list */}
        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-1">
          {/* "All projects" option */}
          <button
            onClick={() => {
              setCurrentProject('')
              onClose()
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition hover:opacity-80"
            style={{
              background: currentProject === '' ? 'rgba(109,40,217,0.08)' : 'transparent',
              color: currentProject === '' ? 'var(--c-accent)' : 'var(--c-muted)',
              fontWeight: currentProject === '' ? 600 : 400,
            }}
          >
            All projects
            {currentProject === '' && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </button>

          <div className="h-px my-1" style={{ background: 'var(--c-border)' }} />

          {projects.length === 0 ? (
            <p className="text-xs text-center py-4" style={{ color: 'var(--c-muted)' }}>
              No projects yet
            </p>
          ) : (
            projects.map((p) => {
              const count = projectItems[p.id]?.length ?? 0
              const isActive = currentProject === p.id
              return (
                <div key={p.id} className="flex items-center gap-2 group">
                  <button
                    onClick={() => {
                      setCurrentProject(p.id)
                      onClose()
                    }}
                    className="flex-1 text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition hover:opacity-80"
                    style={{
                      background: isActive ? 'rgba(109,40,217,0.08)' : 'transparent',
                      color: isActive ? 'var(--c-accent)' : 'var(--c-text)',
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    <span className="flex items-center gap-2">{p.name}</span>
                    <span className="text-xs" style={{ color: 'var(--c-muted)' }}>
                      {count} item{count !== 1 ? 's' : ''}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      void deleteProject(p.id)
                      if (currentProject === p.id) setCurrentProject('')
                    }}
                    className="opacity-0 group-hover:opacity-60 hover:opacity-100 transition w-7 h-7 rounded-lg flex items-center justify-center text-red-500 shrink-0"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                      <path d="M10 11v6M14 11v6" />
                      <path d="M9 6V4h6v2" />
                    </svg>
                  </button>
                </div>
              )
            })
          )}
        </div>

        {/* Create project */}
        <div className="px-4 pb-4 pt-2 border-t" style={{ borderColor: 'var(--c-border)' }}>
          <form onSubmit={handleCreate} className="flex gap-2">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="New project name…"
              className="flex-1 px-3 py-2 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-violet-400/30"
              style={{
                background: 'var(--c-bg)',
                borderColor: 'var(--c-border)',
                color: 'var(--c-text)',
              }}
            />
            <button
              type="submit"
              disabled={creating || !newName.trim()}
              className="px-3 py-2 rounded-lg text-sm font-medium transition disabled:opacity-50"
              style={{ background: 'var(--c-accent)', color: 'white' }}
            >
              Add
            </button>
          </form>
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
      </div>
    </div>
  )
}
