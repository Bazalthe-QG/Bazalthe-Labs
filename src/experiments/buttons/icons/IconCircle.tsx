// Circle icon button
export default function IconCircle() {
  return (
    // Circle icon button
    <button className="w-9 h-9 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 transition">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  )
}
