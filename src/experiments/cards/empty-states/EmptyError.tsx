// Error empty state
export default function EmptyError() {
  return (
    <div className="w-full flex flex-col items-center gap-2 py-4">
      <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ef4444"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <p className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>
        Something went wrong
      </p>
      <p className="text-[10px] text-center" style={{ color: 'var(--c-muted)' }}>
        We couldn't load the data.
      </p>
      <button className="mt-1 px-3 py-1 rounded-lg text-xs font-semibold bg-red-500 text-white">
        Retry
      </button>
    </div>
  )
}
