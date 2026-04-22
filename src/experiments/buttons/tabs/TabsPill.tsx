import { useState } from 'react'

// Pill tab bar
export default function TabsPill() {
  const [tab, setTab] = useState('overview')

  return (
    <div className="inline-flex gap-1">
      {['overview', 'analytics', 'reports', 'settings'].map((t) => (
        <button
          key={t}
          onClick={() => setTab(t)}
          className="px-3 py-1 rounded-lg text-xs font-medium capitalize transition"
          style={{
            background: tab === t ? 'rgba(109,40,217,0.1)' : 'transparent',
            color: tab === t ? 'var(--c-accent)' : 'var(--c-muted)',
          }}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
