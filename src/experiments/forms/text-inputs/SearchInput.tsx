const inputBase = 'w-full text-sm outline-none transition'

// Search input with icon
export default function SearchInput() {
  return (
    <div className="w-full relative">
      <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--c-muted)' }}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input placeholder="Search…" className={`${inputBase} pl-9 pr-3 py-2 rounded-xl border`}
        style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
    </div>
  )
}
