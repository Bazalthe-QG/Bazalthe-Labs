import { useState } from 'react'

// Underline tab bar
export default function TabsUnderline() {
  const [tab, setTab] = useState('all')

  return (
    <div className="inline-flex gap-1 border-b" style={{ borderColor: 'var(--c-border)' }}>
      {['all', 'active', 'drafts', 'archived'].map((t) => (
        <button
          key={t}
          onClick={() => setTab(t)}
          className="px-3 pb-2 text-xs font-medium capitalize transition relative"
          style={{ color: tab === t ? 'var(--c-accent)' : 'var(--c-muted)' }}
        >
          {t}
          {tab === t && (
            <span
              className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full"
              style={{ background: 'var(--c-accent)' }}
            />
          )}
        </button>
      ))}
    </div>
  )
}
