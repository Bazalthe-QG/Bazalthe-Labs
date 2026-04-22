// Icon button with count badge
export default function ButtonBadge() {
  return (
    <div className="relative inline-block">
      <button
        className="w-9 h-9 rounded-xl border flex items-center justify-center transition hover:bg-violet-50"
        style={{ borderColor: 'var(--c-border)', color: 'var(--c-text)' }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      </button>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
        3
      </span>
    </div>
  )
}
