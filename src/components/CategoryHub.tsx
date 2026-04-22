import { Suspense } from 'react'
import type { CategoryMeta } from '../experiments'
import { ViewModeContext, type ViewMode } from '../system'
import { PageKeyContext } from '../context/PageKeyContext'
import { COLORS } from '../config/constants'

/**
 * Toggle between categorize (card) and group (all) view modes
 * @param viewMode Current view mode
 * @param onChange Called when view mode changes
 */
function ViewToggle({
  viewMode,
  onChange,
}: {
  viewMode: ViewMode
  onChange: (m: ViewMode) => void
}) {
  return (
    <div
      className="flex items-center rounded-lg p-0.5 gap-0.5 shrink-0"
      style={{ background: 'rgba(0,0,0,0.06)', border: '1px solid var(--c-border)' }}
    >
      {(['categorize', 'group'] as ViewMode[]).map((m) => (
        <button
          key={m}
          onClick={() => onChange(m)}
          className="px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all duration-150"
          style={{
            background: viewMode === m ? 'var(--c-surface)' : 'transparent',
            color: viewMode === m ? COLORS.primary : 'var(--c-muted)',
            boxShadow: viewMode === m ? '0 1px 3px rgba(0,0,0,0.12)' : 'none',
          }}
        >
          {m === 'categorize' ? 'Categorize' : 'Group'}
        </button>
      ))}
    </div>
  )
}

interface Props {
  category: CategoryMeta
  onNavigate: (subPageId: string) => void
  viewMode: ViewMode
  onViewModeChange: (m: ViewMode) => void
}

export default function CategoryHub({ category, onNavigate, viewMode, onViewModeChange }: Props) {
  if (viewMode === 'group') {
    return (
      <ViewModeContext.Provider value="categorize">
        <div
          className="p-10 max-w-6xl transition-all duration-300 opacity-100 animate-fadeIn"
          style={{ animationDuration: '200ms' }}
        >
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-2xl font-bold" style={{ color: 'var(--c-text)' }}>
                {category.label}
              </h1>
              <ViewToggle viewMode={viewMode} onChange={onViewModeChange} />
            </div>
            <p className="text-sm" style={{ color: 'var(--c-muted)' }}>
              {category.description}
            </p>
          </div>
          <div className="border-t" style={{ borderColor: 'var(--c-border)' }} />

          <div className="space-y-8 mt-8">
            {category.subPages.map((sp) => {
              const Comp = sp.component
              return (
                <PageKeyContext.Provider key={sp.id} value={`${category.id}/${sp.id}`}>
                  <Suspense
                    fallback={
                      <div className="py-8 text-sm" style={{ color: 'var(--c-muted)' }}>
                        Loading…
                      </div>
                    }
                  >
                    <Comp />
                  </Suspense>
                </PageKeyContext.Provider>
              )
            })}
          </div>
        </div>
      </ViewModeContext.Provider>
    )
  }

  return (
    <div className="p-10 transition-all duration-300 opacity-100 animate-fadeIn">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-2xl font-bold" style={{ color: 'var(--c-text)' }}>
            {category.label}
          </h1>
          <ViewToggle viewMode={viewMode} onChange={onViewModeChange} />
        </div>
        <p className="text-sm" style={{ color: 'var(--c-muted)' }}>
          {category.description}
        </p>
      </div>
      <div className="mb-8 border-t" style={{ borderColor: 'var(--c-border)' }} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {category.subPages.map((sp, i) => (
          <button
            key={sp.id}
            onClick={() => onNavigate(sp.id)}
            className="group flex flex-col gap-2 p-3.5 rounded-xl border text-left transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{
              background: 'var(--c-surface)',
              borderColor: 'var(--c-border)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.borderColor = `rgba(236, 72, 153, 0.4)`
              el.style.background = `rgba(236, 72, 153, 0.03)`
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.borderColor = 'var(--c-border)'
              el.style.background = 'var(--c-surface)'
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold transition-all duration-200"
                style={{ background: `rgba(236, 72, 153, 0.1)`, color: COLORS.primary }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform group-hover:translate-x-0.5"
                style={{ color: 'var(--c-muted)', opacity: 0.4 }}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>

            <p className="text-xs font-semibold leading-tight" style={{ color: 'var(--c-text)' }}>
              {sp.label}
            </p>
            <p className="text-[10px] leading-tight" style={{ color: 'var(--c-muted)' }}>
              {sp.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
