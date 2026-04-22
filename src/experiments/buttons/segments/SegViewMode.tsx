import { useState } from 'react'

// View mode control
export default function SegViewMode() {
  const [seg, setSeg] = useState('grid')

  return (
    <div className="inline-flex p-1 rounded-xl gap-0.5" style={{ background: 'var(--c-border)' }}>
      {[
        {
          v: 'grid',
          icon: (
            <>
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </>
          ),
        },
        {
          v: 'list',
          icon: (
            <>
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </>
          ),
        },
        {
          v: 'table',
          icon: (
            <>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="3" y1="15" x2="21" y2="15" />
              <line x1="9" y1="3" x2="9" y2="21" />
              <line x1="15" y1="3" x2="15" y2="21" />
            </>
          ),
        },
      ].map(({ v, icon }) => (
        <button
          key={v}
          onClick={() => setSeg(v)}
          className="w-8 h-7 rounded-lg flex items-center justify-center transition"
          style={{
            background: seg === v ? 'var(--c-surface)' : 'transparent',
            color: seg === v ? 'var(--c-accent)' : 'var(--c-muted)',
            boxShadow: seg === v ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {icon}
          </svg>
        </button>
      ))}
    </div>
  )
}
