// No results state
export default function EmptySearch() {
  return (
    <div className="w-full flex flex-col items-center gap-2 py-4">
      <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a8a29e"
          strokeWidth="1.5"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      <p className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>
        No results found
      </p>
      <p className="text-[10px] text-center" style={{ color: 'var(--c-muted)' }}>
        Try different keywords or filters
      </p>
      <button
        className="mt-1 px-3 py-1 rounded-lg text-xs font-medium border"
        style={{ borderColor: 'var(--c-border)', color: 'var(--c-muted)' }}
      >
        Clear filters
      </button>
    </div>
  )
}
