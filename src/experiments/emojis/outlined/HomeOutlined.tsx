// Home outlined icon
export default function HomeOutlined() {
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10" />
      </svg>
    </div>
  )
}
