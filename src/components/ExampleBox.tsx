import { useRef, useState, useEffect, type ReactNode } from 'react'
import { useFavorites } from '../context/FavoritesContext'
import { useDb } from '../context/DbContext'
import { usePageKey } from '../context/PageKeyContext'
import { subPageConceptMap } from '../config'
import { getComponentSource } from '../utils/sourceMap'

interface Props {
  id: string
  label: string
  category: string
  children: ReactNode
  /** 'sm' 40px | 'md' 60px | 'lg' 100px | 'auto' fits content */
  size?: 'sm' | 'md' | 'lg' | 'auto'
  /** Extra classes on the box div */
  className?: string
  /** Path relative to /src/experiments/, no extension — enables Extract code */
  srcPath?: string
}

const sizeStyle: Record<string, string> = {
  sm: 'min-h-[40px] p-2',
  md: 'min-h-[60px] p-2',
  lg: 'min-h-[100px] p-2',
  auto: 'p-3',
}

export default function ExampleBox({
  id,
  label,
  category,
  children,
  size = 'md',
  className = '',
  srcPath,
}: Props) {
  const { addFavorite, removeFavorite, isFavorite, currentProject } = useFavorites()
  const { projects, projectItems, addToProject, removeFromProject } = useDb()
  const pageKey = usePageKey()
  const conceptTags = pageKey ? (subPageConceptMap[pageKey] ?? []) : []

  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null)
  const [projSub, setProjSub] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const fav = isFavorite(id)
  const fobj = { id, label, category }

  // Project filter — check DB items
  const projectActive = currentProject !== ''
  const inProject =
    !projectActive || !!projectItems[currentProject]?.some((item) => item.exampleId === id)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setMenu(null)
        setProjSub(false)
      }
    }
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenu(null)
        setProjSub(false)
      }
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', esc)
    }
  }, [menu])

  const onContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    const margin = 8
    const mw = 210
    const mh = 120
    let x = e.clientX
    let y = e.clientY
    if (x + mw > window.innerWidth - margin) x = window.innerWidth - mw - margin
    if (y + mh > window.innerHeight - margin) y = window.innerHeight - mh - margin
    setMenu({ x, y })
    setProjSub(false)
  }

  if (!inProject) return null

  return (
    <div className="flex flex-col gap-1">
      <div
        className={`relative rounded-xl border flex items-center justify-center w-full transition hover:border-violet-300/60 cursor-default select-none ${sizeStyle[size ?? 'md']} ${className}`}
        style={{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }}
        onContextMenu={onContextMenu}
      >
        {children}
        {fav && (
          <div className="absolute top-2 right-2 opacity-80">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Label + concept tags */}
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[10px] font-mono text-center" style={{ color: 'var(--c-muted)' }}>
          {label}
        </span>
        {conceptTags.length > 0 && (
          <span className="text-[9px] italic text-center leading-tight text-emerald-500">
            {conceptTags.join(', ')}
          </span>
        )}
      </div>

      {/* ── Context menu ── */}
      {menu && (
        <div
          ref={menuRef}
          className="fixed z-[9999] rounded-xl border shadow-2xl"
          style={{
            top: menu.y,
            left: menu.x,
            background: 'var(--c-surface)',
            borderColor: 'var(--c-border)',
            minWidth: 210,
          }}
        >
          <div className="p-1.5 flex flex-col gap-0.5">
            {/* Favorite toggle */}
            <button
              className="w-full text-left px-3 py-2 rounded-lg text-xs flex items-center gap-2.5 transition hover:opacity-80"
              style={{
                color: fav ? '#f59e0b' : 'var(--c-text)',
                background: fav ? 'rgba(245,158,11,0.06)' : 'transparent',
              }}
              onClick={() => {
                if (fav) removeFavorite(id)
                else addFavorite(fobj)
                setMenu(null)
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill={fav ? '#f59e0b' : 'none'}
                stroke={fav ? '#f59e0b' : 'currentColor'}
                strokeWidth="2"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {fav ? 'Remove from favorites' : 'Add to favorites'}
            </button>

            <div className="h-px my-0.5 mx-2" style={{ background: 'var(--c-border)' }} />

            {/* Add to project (hoverable submenu) */}
            <div
              className="relative"
              onMouseEnter={() => setProjSub(true)}
              onMouseLeave={() => setProjSub(false)}
            >
              <button
                className="w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition hover:opacity-80"
                style={{ color: projects.length === 0 ? 'var(--c-muted)' : 'var(--c-text)' }}
              >
                <span className="flex items-center gap-2.5">
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
                  {projects.length === 0 ? 'No projects yet' : 'Add to project'}
                </span>
                {projects.length > 0 && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                )}
              </button>
              {projSub && projects.length > 0 && (
                <div
                  className="absolute left-full top-0 ml-1 rounded-xl border shadow-2xl overflow-hidden"
                  style={{
                    background: 'var(--c-surface)',
                    borderColor: 'var(--c-border)',
                    minWidth: 160,
                  }}
                >
                  <div className="p-1.5">
                    {projects.map((p) => {
                      const inThis = projectItems[p.id]?.some((i) => i.exampleId === id) ?? false
                      return (
                        <button
                          key={p.id}
                          className="w-full text-left px-3 py-1.5 rounded-lg text-xs flex items-center justify-between transition hover:opacity-80"
                          style={{
                            color: inThis ? 'var(--c-accent)' : 'var(--c-text)',
                            background: inThis ? 'rgba(109,40,217,0.06)' : 'transparent',
                            fontWeight: inThis ? 600 : 400,
                          }}
                          onClick={() => {
                            if (inThis) {
                              void removeFromProject(p.id, id)
                            } else {
                              void addToProject(p.id, id, label, category)
                            }
                            setMenu(null)
                            setProjSub(false)
                          }}
                        >
                          {p.name}
                          {inThis && (
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="h-px my-0.5 mx-2" style={{ background: 'var(--c-border)' }} />

            {/* Extract code */}
            <button
              className="w-full text-left px-3 py-2 rounded-lg text-xs flex items-center gap-2.5 transition hover:opacity-80"
              style={{ color: srcPath ? 'var(--c-text)' : 'var(--c-muted)' }}
              onClick={() => {
                const src = srcPath ? getComponentSource(srcPath) : null
                const text = src ?? `// ${label}\n// Source: src/experiments/${srcPath ?? id}.tsx`
                navigator.clipboard.writeText(text).catch(() => {})
                setMenu(null)
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              Extract code
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
