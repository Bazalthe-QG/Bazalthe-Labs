// Button with inline loading spinner
export default function ButtonLoading() {
  return (
    <button
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white"
      style={{ background: 'var(--c-accent)' }}
    >
      <svg
        className="animate-spin"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path
          d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"
          opacity=".4"
        />
        <path d="M12 2v4" />
      </svg>
      Saving…
    </button>
  )
}
