// Cart count badge
export default function BadgeCount() {
  return (
    <button className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-medium bg-stone-900 text-white hover:bg-stone-700 transition">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
      Cart
      <span className="w-5 h-5 rounded-full bg-violet-500 text-white text-[10px] font-bold flex items-center justify-center">
        4
      </span>
    </button>
  )
}
