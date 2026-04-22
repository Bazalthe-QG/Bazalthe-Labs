import { useState, useRef } from 'react'
import { categories, categoryGroups, type Category } from '../../experiments'
import { useFavorites } from '../../context/FavoritesContext'
import { subPageConceptMap } from '../../config'

// Per-category SVG icons
function CategoryIcon({ id, active }: { id: Category; active: boolean }) {
  const color = active ? 'white' : 'var(--c-accent)'
  const sw = '1.8'
  switch (id) {
    case 'buttons':
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
        >
          <rect x="2" y="7" width="20" height="10" rx="3" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      )
    case 'cards':
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
        >
          <rect x="2" y="4" width="9" height="9" rx="2" />
          <rect x="13" y="4" width="9" height="9" rx="2" />
          <rect x="2" y="15" width="9" height="5" rx="2" />
          <rect x="13" y="15" width="9" height="5" rx="2" />
        </svg>
      )
    case 'forms':
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <rect x="4" y="11" width="16" height="3" rx="1" />
          <line x1="4" y1="18" x2="14" y2="18" />
        </svg>
      )
    case 'typography':
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
        >
          <path d="M4 6h16M4 12h10M4 18h6" />
        </svg>
      )
    case 'animations':
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
        >
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
        </svg>
      )
    case 'colors':
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path
            d="M12 3a9 9 0 010 18"
            fill={active ? 'rgba(255,255,255,0.3)' : 'rgba(109,40,217,0.15)'}
            stroke="none"
          />
        </svg>
      )
    case 'shadows':
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
        >
          <rect x="3" y="3" width="13" height="13" rx="2" />
          <rect x="8" y="8" width="13" height="13" rx="2" style={{ opacity: 0.5 }} />
        </svg>
      )
    case 'layouts':
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
        >
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <line x1="2" y1="9" x2="22" y2="9" />
          <line x1="8" y1="9" x2="8" y2="21" />
        </svg>
      )
    case 'badges':
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
        >
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="3" />
        </svg>
      )
    case 'loaders':
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
        >
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" opacity=".4" />
          <path d="M12 2v4" />
          <circle cx="12" cy="12" r="9" strokeDasharray="4 4" />
        </svg>
      )
    case 'emojis':
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 13s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
        </svg>
      )
    default:
      return null
  }
}

interface Props {
  activeCategory: Category
  activeSubPageId: string | null
  onSelectCategory: (cat: Category) => void
  onSelectSubPage: (cat: Category, subPageId: string) => void
}

export default function Sidebar({
  activeCategory,
  activeSubPageId,
  onSelectCategory,
  onSelectSubPage,
}: Props) {
  const { favorites, removeFavorite, currentConcept } = useFavorites()

  // Resizable width
  const [sidebarWidth, setSidebarWidth] = useState(240)
  const isResizing = useRef(false)
  const sidebarRef = useRef<HTMLElement>(null)

  // UI state
  const [favCollapsed, setFavCollapsed] = useState(false)
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set())

  const showText = sidebarWidth > 72
  const bdr = { borderColor: 'var(--c-border)' }
  const bg = { background: 'var(--c-sidebar)' }

  // Concept filter
  const conceptCatFilter =
    currentConcept !== ''
      ? new Set(
          Object.entries(subPageConceptMap)
            .filter(([, concepts]) => concepts.includes(currentConcept))
            .map(([key]) => key.split('/')[0])
        )
      : null

  // Resize handle
  const startResize = (e: React.MouseEvent) => {
    e.preventDefault()
    isResizing.current = true
    const onMove = (ev: MouseEvent) => {
      if (!isResizing.current) return
      setSidebarWidth(Math.max(56, Math.min(420, ev.clientX)))
    }
    const onUp = () => {
      isResizing.current = false
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  const toggleGroup = (label: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })
  }

  return (
    <aside
      ref={sidebarRef}
      className="relative h-screen flex flex-col shrink-0 border-r"
      style={{ width: sidebarWidth, ...bg, ...bdr }}
    >
      {/* ── Header ── */}
      <div className="flex items-center gap-2 px-3 h-11 border-b shrink-0" style={bdr}>
        {showText && (
          <span
            className="flex-1 text-[10px] font-bold tracking-[0.16em] uppercase select-none truncate"
            style={{ color: 'var(--c-muted)' }}
          >
            Bazalthe Labs
          </span>
        )}
        <button
          onClick={() => setSidebarWidth((w) => (w > 72 ? 56 : 240))}
          className="w-7 h-7 rounded-md flex items-center justify-center transition hover:opacity-70 shrink-0 ml-auto"
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
            {showText ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
          </svg>
        </button>
      </div>

      {/* ── Scrollable nav ── */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {/* Favorites */}
        {favorites.length > 0 && showText && (
          <div className="px-2 pt-3 pb-1">
            <button
              onClick={() => setFavCollapsed((c) => !c)}
              className="flex items-center justify-between w-full px-2 mb-1"
            >
              <span
                className="text-[9px] font-bold uppercase tracking-[0.14em] flex items-center gap-1.5"
                style={{ color: '#f59e0b' }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="#f59e0b">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Favorites
              </span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{
                  color: 'var(--c-muted)',
                  transform: favCollapsed ? 'rotate(-90deg)' : 'none',
                  transition: 'transform .2s',
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {!favCollapsed && (
              <ul className="flex flex-col gap-0.5">
                {favorites.map((f) => (
                  <li key={f.id} className="flex items-center gap-1 group/fav">
                    <button
                      onClick={() => onSelectCategory(f.category as Category)}
                      className="flex-1 min-w-0 flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-left transition hover:opacity-80"
                      style={{ color: 'var(--c-text)' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-amber-400" />
                      <span className="truncate">{f.label}</span>
                    </button>
                    <button
                      onClick={() => removeFavorite(f.id)}
                      className="opacity-0 group-hover/fav:opacity-60 shrink-0 hover:opacity-100 transition pr-1"
                      style={{ color: 'var(--c-muted)' }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className="h-px mt-3" style={{ background: 'var(--c-border)' }} />
          </div>
        )}

        {/* Category groups */}
        <nav className="py-2 px-2 flex flex-col gap-0.5">
          {categoryGroups.map((group, gi) => {
            const groupCollapsed = collapsedGroups.has(group.label)
            return (
              <div key={group.label}>
                {/* Group label */}
                {showText ? (
                  <button
                    onClick={() => toggleGroup(group.label)}
                    className={`flex items-center justify-between w-full px-2 mb-1 ${gi > 0 ? 'mt-4' : 'mt-2'}`}
                  >
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: 'var(--c-muted)', opacity: 0.6 }}
                    >
                      {group.label}
                    </span>
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{
                        color: 'var(--c-muted)',
                        transform: groupCollapsed ? 'rotate(-90deg)' : 'none',
                        transition: 'transform .15s',
                      }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                ) : (
                  gi > 0 && (
                    <div className="h-px mx-1 my-2" style={{ background: 'var(--c-border)' }} />
                  )
                )}

                {/* Categories in group */}
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: groupCollapsed ? 0 : 1000,
                    opacity: groupCollapsed ? 0 : 1,
                    transition: 'max-height .25s ease, opacity .2s ease',
                  }}
                >
                  {group.ids.map((catId) => {
                    // Concept filter
                    if (conceptCatFilter && !conceptCatFilter.has(catId)) return null

                    const cat = categories.find((c) => c.id === catId)!
                    const isActive = activeCategory === catId

                    return (
                      <div key={catId}>
                        {/* Category row */}
                        <div className="flex items-center gap-0.5">
                          <button
                            onClick={() => {
                              onSelectCategory(catId)
                            }}
                            title={cat.label}
                            className="flex-1 flex items-center gap-2.5 px-2 py-[6px] rounded-lg transition"
                            style={{
                              background:
                                isActive && !activeSubPageId
                                  ? 'rgba(109,40,217,0.09)'
                                  : 'transparent',
                              color: isActive ? 'var(--c-accent)' : 'var(--c-muted)',
                            }}
                          >
                            {/* Icon badge */}
                            <span
                              className="shrink-0 w-[22px] h-[22px] rounded-[6px] flex items-center justify-center transition-all duration-200"
                              style={{
                                background: isActive ? 'var(--c-accent)' : 'rgba(109,40,217,0.10)',
                                border: `1px solid ${isActive ? 'transparent' : 'rgba(109,40,217,0.20)'}`,
                              }}
                            >
                              <CategoryIcon id={catId} active={isActive} />
                            </span>
                            {showText && (
                              <span
                                className="truncate text-[13px]"
                                style={{ fontWeight: isActive ? 600 : 400 }}
                              >
                                {cat.label}
                              </span>
                            )}
                          </button>
                        </div>

                        {/* Sub-pages — visible when active */}
                        {isActive && showText && (
                          <div className="ml-[30px] mt-0.5 mb-1 flex flex-col gap-0.5">
                            {cat.subPages.map((sp) => {
                              const spActive = isActive && activeSubPageId === sp.id
                              return (
                                <button
                                  key={sp.id}
                                  onClick={() => onSelectSubPage(catId, sp.id)}
                                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs transition text-left"
                                  style={{
                                    background: spActive ? 'rgba(109,40,217,0.08)' : 'transparent',
                                    color: spActive ? 'var(--c-accent)' : 'var(--c-muted)',
                                    fontWeight: spActive ? 600 : 400,
                                  }}
                                >
                                  <span
                                    className="w-1 h-1 rounded-full shrink-0"
                                    style={{
                                      background: spActive ? 'var(--c-accent)' : 'var(--c-muted)',
                                      opacity: spActive ? 1 : 0.5,
                                    }}
                                  />
                                  {sp.label}
                                </button>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </nav>
      </div>

      {/* ── Resize handle ── */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize z-50 hover:bg-violet-400/40 active:bg-violet-400/60 transition-colors"
        onMouseDown={startResize}
      />
    </aside>
  )
}
