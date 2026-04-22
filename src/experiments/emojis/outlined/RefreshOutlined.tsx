// Refresh outlined icon
export default function RefreshOutlined() {
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
      </svg>
    </div>
  )
}
