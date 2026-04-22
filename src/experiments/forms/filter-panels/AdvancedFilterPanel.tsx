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

// Collapsible advanced filter panel
export default function AdvancedFilterPanel() {
  const [advancedOpen, setAdvancedOpen] = useState(false)
  const [advFilters, setAdvFilters] = useState({ type: '', priority: '', assignee: '' })
  return (
    <div className="w-80 flex flex-col gap-3">
      <SearchBar placeholder="Search items…" />
      <div className="flex flex-wrap gap-1.5">
        {[
          { label: 'Type: Card', color: '#8b5cf6' },
          { label: 'Status: Active', color: '#10b981' },
        ].map(({ label, color }) => (
          <span key={label} className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium"
            style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}>
            {label}
            <button style={{ opacity: 0.7 }}>×</button>
          </span>
        ))}
        <button className="text-[11px] px-2.5 py-0.5 rounded-full transition"
          style={{ color: 'var(--c-muted)', border: '1px solid var(--c-border)' }}>Clear all</button>
      </div>
      <div className="rounded-xl border overflow-hidden" style={{ borderColor: 'var(--c-border)' }}>
        <button onClick={() => setAdvancedOpen((o) => !o)}
          className="flex items-center justify-between w-full px-4 py-2.5"
          style={{ background: 'var(--c-surface)' }}>
          <span className="text-xs font-semibold" style={{ color: 'var(--c-text)' }}>Advanced filters</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            style={{ color: 'var(--c-muted)', transform: advancedOpen ? 'none' : 'rotate(-90deg)', transition: 'transform .2s' }}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {advancedOpen && (
          <div className="px-4 py-3 flex flex-col gap-3 border-t" style={{ borderColor: 'var(--c-border)' }}>
            {([
              { key: 'type' as const, label: 'Type', options: ['Button', 'Card', 'Form', 'Layout'] },
              { key: 'priority' as const, label: 'Priority', options: ['High', 'Medium', 'Low'] },
              { key: 'assignee' as const, label: 'Assignee', options: ['Me', 'Team', 'Anyone'] },
            ]).map(({ key, label, options }) => (
              <div key={key} className="flex items-center gap-3">
                <label className="text-[11px] font-medium w-16 shrink-0" style={{ color: 'var(--c-muted)' }}>{label}</label>
                <select value={advFilters[key]} onChange={(e) => setAdvFilters((f) => ({ ...f, [key]: e.target.value }))}
                  className="flex-1 h-7 px-2 rounded-lg border text-xs outline-none"
                  style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }}>
                  <option value="">Any</option>
                  {options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            ))}
            <div className="flex gap-2 pt-1">
              <button className="flex-1 py-1.5 rounded-lg text-xs font-semibold transition"
                style={{ background: 'var(--c-accent)', color: '#fff' }}>Apply</button>
              <button onClick={() => setAdvFilters({ type: '', priority: '', assignee: '' })}
                className="flex-1 py-1.5 rounded-lg text-xs transition"
                style={{ border: '1px solid var(--c-border)', color: 'var(--c-muted)' }}>Reset</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
