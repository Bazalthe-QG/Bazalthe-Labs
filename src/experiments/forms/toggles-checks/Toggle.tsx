import { useState } from 'react'

// Triple toggle switches
export default function Toggle() {
  const [on1, setOn1] = useState(true)
  const [on2, setOn2] = useState(false)
  const [on3, setOn3] = useState(true)
  return (
    <div className="flex flex-col gap-3">
      {([['Notifications', on1, setOn1], ['Dark mode', on2, setOn2], ['Autosave', on3, setOn3]] as const).map(([l, val, set]) => (
        <div key={l} className="flex items-center gap-3">
          <button onClick={() => (set as (v: boolean) => void)(!val)}
            className="w-9 h-5 rounded-full relative transition-colors duration-200"
            style={{ background: val ? 'var(--c-accent)' : 'var(--c-border)' }}>
            <div className="w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all duration-200"
              style={{ left: val ? '19px' : '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
          </button>
          <span className="text-xs" style={{ color: 'var(--c-text)' }}>{l}</span>
        </div>
      ))}
    </div>
  )
}
