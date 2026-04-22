// Focused inset search bar
export default function InsetSearch() {
  return (
    <div className="w-64">
      <div className="flex items-center gap-2 px-3 h-9 rounded-xl border w-full"
        style={{ background: 'rgba(109,40,217,0.04)', borderColor: 'var(--c-accent)', boxShadow: '0 0 0 3px rgba(109,40,217,0.08)' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--c-accent)', flexShrink: 0 }}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input placeholder="Search…" className="flex-1 bg-transparent text-sm outline-none" style={{ color: 'var(--c-text)' }} />
        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: 'var(--c-border)', color: 'var(--c-muted)' }}>⌘K</span>
      </div>
    </div>
  )
}
