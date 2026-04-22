/**
 * Show/hide toggle for expandable lists.
 * Displays remaining item count in a collapsible pill.
 */

import { useState } from 'react'
import { PAGINATION, COLORS } from '../config/constants'

interface ShowMoreProps {
  items: React.ReactNode[]
  maxVisible?: number
  label?: (count: number) => string
}

export function ShowMore({ items, maxVisible = PAGINATION.sidebarMaxItems, label }: ShowMoreProps) {
  const [expanded, setExpanded] = useState(false)
  const remaining = items.length - maxVisible

  if (items.length <= maxVisible) {
    return <>{items.map((item, i) => <div key={i}>{item}</div>)}</>
  }

  const visible = expanded ? items : items.slice(0, maxVisible)

  return (
    <>
      {visible.map((item, i) => (
        <div key={i}>{item}</div>
      ))}

      {remaining > 0 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 hover:scale-105"
          style={{
            background: `rgba(236, 72, 153, 0.08)`,
            color: COLORS.primary,
            border: `1px solid rgba(236, 72, 153, 0.2)`,
          }}
        >
          <span>{expanded ? 'Show less' : `+${remaining} more`}</span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      )}
    </>
  )
}
