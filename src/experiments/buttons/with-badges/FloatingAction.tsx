// Floating action button
export default function FloatingAction() {
  return (
    <button className="w-12 h-12 rounded-2xl bg-violet-600 text-white flex items-center justify-center shadow-lg hover:bg-violet-700 transition hover:scale-105">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  )
}
