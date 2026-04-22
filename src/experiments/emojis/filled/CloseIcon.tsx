// Close filled icon
export default function CloseIcon() {
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(109,40,217,0.1)' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--c-accent)" stroke="none">
        <path d="M18 6L6 18M6 6l12 12" fillRule="evenodd" clipRule="evenodd" />
      </svg>
    </div>
  )
}
