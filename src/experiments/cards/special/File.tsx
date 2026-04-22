// File preview card
export default function File() {
  return (
    // File card
    <div className="w-full p-1 space-y-2.5">
      <div className="h-16 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6366f1"
          strokeWidth="1.5"
        >
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      </div>
      <div>
        <p className="text-xs font-medium truncate" style={{ color: 'var(--c-text)' }}>
          design-system.fig
        </p>
        <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
          24.3 MB · Modified today
        </p>
      </div>
    </div>
  )
}
