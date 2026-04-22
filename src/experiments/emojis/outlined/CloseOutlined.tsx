// Close outlined icon
export default function CloseOutlined() {
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </div>
  )
}
