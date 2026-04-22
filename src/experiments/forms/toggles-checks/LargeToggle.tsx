import { useState } from 'react'

// Large toggle with checkmark
export default function LargeToggle() {
  const [on, setOn] = useState(true)
  return (
    <div className="flex items-center gap-4">
      <button onClick={() => setOn((v) => !v)}
        className="w-14 h-7 rounded-full relative transition-colors duration-200"
        style={{ background: on ? 'var(--c-accent)' : 'var(--c-border)' }}>
        <div className="w-5 h-5 rounded-full bg-white absolute top-1 transition-all duration-200 flex items-center justify-center"
          style={{ left: on ? '33px' : '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
          {on && (
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </button>
      <span className="text-sm font-medium" style={{ color: 'var(--c-text)' }}>{on ? 'Enabled' : 'Disabled'}</span>
    </div>
  )
}
