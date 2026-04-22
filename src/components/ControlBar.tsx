import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import ProjectModal from './modals/ProjectModal'
import ConceptModal from './modals/ConceptModal'

interface Props {
  dark: boolean
  onToggleDark: () => void
}

export default function ControlBar({ dark, onToggleDark }: Props) {
  const { user, logout } = useAuth()
  const [projectOpen, setProjectOpen] = useState(false)
  const [conceptOpen, setConceptOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!userMenuRef.current?.contains(e.target as Node)) setUserMenuOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  return (
    <>
      <div className="flex items-center gap-2">
        {/* Concepts button */}
        <button
          onClick={() => setConceptOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition hover:opacity-80"
          style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}
          title="Concepts"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
          </svg>
          Concepts
        </button>

        {/* Projects button */}
        <button
          onClick={() => setProjectOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition hover:opacity-80"
          style={{ background: 'rgba(109,40,217,0.1)', color: 'var(--c-accent)' }}
          title="Projects"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          Projects
        </button>

        {/* Dark mode toggle */}
        <button
          onClick={onToggleDark}
          className="w-8 h-8 rounded-lg flex items-center justify-center transition hover:opacity-70"
          style={{ color: 'var(--c-muted)', background: 'rgba(0,0,0,0.04)' }}
          title={dark ? 'Light mode' : 'Dark mode'}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {dark ? (
              <>
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </>
            ) : (
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            )}
          </svg>
        </button>

        {/* User icon */}
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={() => setUserMenuOpen((o) => !o)}
            className="w-8 h-8 rounded-full flex items-center justify-center transition hover:opacity-80"
            style={{ background: 'var(--c-accent)', color: 'white' }}
            title={user?.name ?? 'Account'}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          {userMenuOpen && (
            <div
              className="absolute right-0 top-full mt-2 rounded-xl border shadow-2xl z-[9999] min-w-[180px]"
              style={{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }}
            >
              <div className="px-3 py-2.5 border-b" style={{ borderColor: 'var(--c-border)' }}>
                <p className="text-xs font-semibold" style={{ color: 'var(--c-text)' }}>
                  {user?.name}
                </p>
                <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
                  {user?.email}
                </p>
                {user?.role === 'admin' && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-violet-500/10 text-violet-500 font-semibold uppercase tracking-wider">
                    Admin
                  </span>
                )}
              </div>
              <div className="p-1">
                <button
                  onClick={() => {
                    logout()
                    setUserMenuOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs flex items-center gap-2 transition hover:opacity-80 text-red-500"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {projectOpen && <ProjectModal onClose={() => setProjectOpen(false)} />}
      {conceptOpen && <ConceptModal onClose={() => setConceptOpen(false)} />}
    </>
  )
}
