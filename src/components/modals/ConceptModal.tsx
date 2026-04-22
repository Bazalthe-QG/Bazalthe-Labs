import { useState } from 'react'
import { useDb } from '../../context/DbContext'
import { useFavorites } from '../../context/FavoritesContext'
import { useAuth } from '../../context/AuthContext'
import { COLORS } from '../../config/constants'

interface Props {
  onClose: () => void
}

/**
 * Modal to manage design concepts.
 * Create, select, and delete concepts (admin).
 */
export default function ConceptModal({ onClose }: Props) {
  const { concepts, createConcept, deleteConcept } = useDb()
  const { currentConcept, setCurrentConcept } = useFavorites()
  const { user } = useAuth()
  const isAdmin = user?.role === 'admin'
  const [newLabel, setNewLabel] = useState('')
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState('')

  /**
   * Create new concept and reset form
   */
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newLabel.trim()) return
    setCreating(true)
    setError('')
    try {
      await createConcept(newLabel.trim())
      setNewLabel('')
    } catch {
      setError('Failed to create concept')
    } finally {
      setCreating(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[9990] flex items-center justify-center animate-fadeIn"
      style={{ background: 'rgba(0,0,0,0.5)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="w-full max-w-md rounded-2xl border shadow-2xl flex flex-col overflow-hidden animate-slideUp"
        style={{
          background: 'var(--c-surface)',
          borderColor: 'var(--c-border)',
          maxHeight: '80vh',
        }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: 'var(--c-border)' }}>
          <h2 className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>
            Concepts
          </h2>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:opacity-70 hover:scale-110"
            style={{ color: 'var(--c-muted)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-1">
          <button
            onClick={() => {
              setCurrentConcept('')
              onClose()
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition-all duration-200 hover:scale-105"
            style={{
              background: currentConcept === '' ? `rgba(236, 72, 153, 0.08)` : 'transparent',
              color: currentConcept === '' ? COLORS.primary : 'var(--c-muted)',
              fontWeight: currentConcept === '' ? 600 : 400,
              fontStyle: currentConcept === '' ? 'italic' : 'normal',
            }}
          >
            All concepts
            {currentConcept === '' && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </button>

          <div className="h-px my-1" style={{ background: 'var(--c-border)' }} />

          {concepts.length === 0 ? (
            <p className="text-xs text-center py-4" style={{ color: 'var(--c-muted)' }}>
              No concepts yet
            </p>
          ) : (
            concepts.map((c) => {
              const isActive = currentConcept === c.label
              return (
                <div key={c.id} className="flex items-center gap-2 group">
                  <button
                    onClick={() => {
                      setCurrentConcept(c.label)
                      onClose()
                    }}
                    className="flex-1 text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:scale-105"
                    style={{
                      background: isActive ? `rgba(236, 72, 153, 0.08)` : 'transparent',
                      color: isActive ? COLORS.primary : 'var(--c-text)',
                      fontWeight: isActive ? 600 : 400,
                      fontStyle: isActive ? 'italic' : 'normal',
                    }}
                  >
                    {c.label}
                  </button>
                  {isAdmin && (
                    <button
                      onClick={() => {
                        void deleteConcept(c.id)
                        if (currentConcept === c.label) setCurrentConcept('')
                      }}
                      className="opacity-0 group-hover:opacity-70 hover:opacity-100 transition-all w-6 h-6 rounded-md flex items-center justify-center hover:bg-red-500/10 shrink-0"
                      style={{ color: '#EF4444' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6M14 11v6" />
                        <path d="M9 6V4h6v2" />
                      </svg>
                    </button>
                  )}
                </div>
              )
            })
          )}
        </div>

        {isAdmin && (
          <div className="px-4 pb-4 pt-2 border-t" style={{ borderColor: 'var(--c-border)' }}>
            <form onSubmit={handleCreate} className="flex gap-2">
              <input
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                placeholder="New concept…"
                className="flex-1 px-3 py-2 rounded-lg border text-sm outline-none focus:ring-2 transition-all"
                style={{
                  background: 'var(--c-bg)',
                  borderColor: 'var(--c-border)',
                  color: 'var(--c-text)',
                  focusRing: `2px solid rgba(236, 72, 153, 0.3)`,
                }}
              />
              <button
                type="submit"
                disabled={creating || !newLabel.trim()}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50 hover:shadow-lg"
                style={{ background: COLORS.primary, color: 'white' }}
              >
                Add
              </button>
            </form>
            {error && <p className="text-xs mt-2" style={{ color: '#EF4444' }}>{error}</p>}
          </div>
        )}
      </div>
    </div>
  )
}
