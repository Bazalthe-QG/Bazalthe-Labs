// Search with filter chips
export default function SearchFilter() {
  return (
    <div className="w-full space-y-2">
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--c-muted)' }}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input placeholder="Search components…" className="w-full text-sm pl-9 pr-3 py-2 rounded-xl border outline-none"
          style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {['All', 'Buttons', 'Cards', 'Forms', 'Badges'].map((f, i) => (
          <button key={f} className="px-2.5 py-0.5 rounded-full text-xs font-medium border transition"
            style={{ background: i === 0 ? 'var(--c-accent)' : 'transparent', color: i === 0 ? 'white' : 'var(--c-muted)', borderColor: i === 0 ? 'var(--c-accent)' : 'var(--c-border)' }}>
            {f}
          </button>
        ))}
      </div>
    </div>
  )
}
