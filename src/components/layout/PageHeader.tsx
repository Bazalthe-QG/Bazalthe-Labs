import type { CategoryMeta, SubPage } from '../../experiments'
import ControlBar from '../ControlBar'

interface Props {
  category: CategoryMeta
  subPage?: SubPage
  onBack?: () => void
  dark: boolean
  onToggleDark: () => void
}

export default function PageHeader({ category, subPage, onBack, dark, onToggleDark }: Props) {
  return (
    <header
      className="h-11 px-6 flex items-center justify-between border-b shrink-0"
      style={{ background: 'var(--c-sidebar)', borderColor: 'var(--c-border)' }}
    >
      {/* ── Breadcrumb ── */}
      <div className="flex items-center gap-2 min-w-0">
        {subPage && onBack && (
          <button
            onClick={onBack}
            className="flex items-center justify-center w-6 h-6 rounded-md shrink-0 transition hover:opacity-70"
            style={{ color: 'var(--c-muted)' }}
            title="Back to hub"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        <button
          onClick={onBack}
          className="flex items-center gap-1.5 shrink-0 transition"
          style={{
            color: subPage ? 'var(--c-muted)' : 'var(--c-text)',
            cursor: subPage ? 'pointer' : 'default',
          }}
        >
          <span className="text-sm font-semibold leading-none">{category.label}</span>
        </button>

        {subPage && (
          <>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="shrink-0"
              style={{ color: 'var(--c-muted)', opacity: 0.35 }}
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
            <span className="text-sm font-semibold truncate" style={{ color: 'var(--c-text)' }}>
              {subPage.label}
            </span>
          </>
        )}
      </div>

      {/* ── Right side controls ── */}
      <ControlBar dark={dark} onToggleDark={onToggleDark} />
    </header>
  )
}
