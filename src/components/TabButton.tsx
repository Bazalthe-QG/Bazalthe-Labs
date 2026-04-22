/**
 * Tab button for modal headers.
 * Pink + italic when selected, with checkmark.
 */

import { COLORS } from '../config/constants'

interface TabButtonProps {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}

export function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
        active ? 'italic' : ''
      }`}
      style={{
        background: active ? `rgba(236, 72, 153, 0.1)` : 'transparent',
        color: active ? COLORS.primary : 'var(--c-muted)',
        borderBottom: active ? `2px solid ${COLORS.primary}` : '2px solid transparent',
      }}
    >
      {active && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      )}
      {children}
    </button>
  )
}
