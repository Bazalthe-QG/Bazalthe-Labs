// Filter icon button
export default function IconFilter() {
  return (
    // Filter button
    <button
      className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-medium border hover:bg-stone-50 transition"
      style={{ color: 'var(--c-text)', borderColor: 'var(--c-border)' }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
      Filter
      <span className="w-4 h-4 rounded-full bg-violet-600 text-white text-[9px] flex items-center justify-center font-bold">
        3
      </span>
    </button>
  )
}
