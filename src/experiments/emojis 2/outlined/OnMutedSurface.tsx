// OnMuted surface variant
export default function OnMutedSurface() {
  return (
    <div className="p-2 rounded-xl" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-muted)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10" />
      </svg>
    </div>
  )
}
