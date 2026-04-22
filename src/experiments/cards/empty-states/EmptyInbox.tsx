// Empty inbox state
export default function EmptyInbox() {
  return (
    <div className="w-full flex flex-col items-center gap-2 py-4">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7c3aed"
          strokeWidth="1.5"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </div>
      <p className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>
        All caught up!
      </p>
      <p className="text-[10px] text-center" style={{ color: 'var(--c-muted)' }}>
        No new messages. Check back later.
      </p>
    </div>
  )
}
