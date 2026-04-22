// Indeterminate checkbox state
export default function Indeterminate() {
  return (
    <div className="flex flex-col gap-2.5">
      <label className="flex items-center gap-2.5 cursor-pointer">
        <div className="w-4 h-4 rounded border flex items-center justify-center shrink-0"
          style={{ background: 'var(--c-accent)', borderColor: 'var(--c-accent)' }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
        <span className="text-xs font-medium" style={{ color: 'var(--c-text)' }}>Select all</span>
      </label>
      {['Item A', 'Item B'].map((t) => (
        <label key={t} className="flex items-center gap-2.5 ml-4 cursor-pointer">
          <div className="w-4 h-4 rounded border" style={{ borderColor: 'var(--c-border)' }} />
          <span className="text-xs" style={{ color: 'var(--c-muted)' }}>{t}</span>
        </label>
      ))}
    </div>
  )
}
