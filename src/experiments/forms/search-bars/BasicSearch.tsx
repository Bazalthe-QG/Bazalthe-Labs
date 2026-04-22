import { useState } from 'react'

function SearchBar({ placeholder = 'Search…', icon = true }: { placeholder?: string; icon?: boolean }) {
  const [v, setV] = useState('')
  return (
    <div className="flex items-center gap-2 px-3 h-9 rounded-xl border w-full" style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)' }}>
      {icon && (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--c-muted)', flexShrink: 0 }}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )}
      <input value={v} onChange={(e) => setV(e.target.value)} placeholder={placeholder} className="flex-1 bg-transparent text-sm outline-none" style={{ color: 'var(--c-text)' }} />
      {v && (
        <button onClick={() => setV('')} style={{ color: 'var(--c-muted)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  )
}

// Basic search bar
export default function BasicSearch() {
  return (
    <div className="w-64">
      <SearchBar />
    </div>
  )
}
