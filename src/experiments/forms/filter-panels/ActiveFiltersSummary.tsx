// Active filters summary list
export default function ActiveFiltersSummary() {
  return (
    <div className="w-80 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--c-muted)' }}>
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
        <span className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>Active filters</span>
        <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ background: 'rgba(109,40,217,0.12)', color: 'var(--c-accent)' }}>4 applied</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {[
          { label: 'Type', value: 'Card', color: '#8b5cf6' },
          { label: 'Status', value: 'Active', color: '#10b981' },
          { label: 'Owner', value: 'You', color: '#3b82f6' },
          { label: 'Date', value: 'This week', color: '#f59e0b' },
        ].map(({ label, value, color }) => (
          <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
            <span className="text-[10px] font-medium w-10 shrink-0" style={{ color: 'var(--c-muted)' }}>{label}</span>
            <span className="flex-1 text-xs font-semibold" style={{ color }}>{value}</span>
            <button className="text-xs transition hover:opacity-70" style={{ color: 'var(--c-muted)' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <button className="text-xs py-1.5 rounded-lg transition" style={{ border: '1px solid var(--c-border)', color: 'var(--c-muted)' }}>Clear all filters</button>
    </div>
  )
}
