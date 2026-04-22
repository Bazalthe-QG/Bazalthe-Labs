// Leading icon button
export default function IconLeading() {
  return (
    // Leading icon button
    <button className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-medium bg-violet-600 text-white hover:bg-violet-700 transition">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
      Add new
    </button>
  )
}
