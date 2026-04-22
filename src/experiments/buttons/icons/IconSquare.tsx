// Square icon button
export default function IconSquare() {
  return (
    // Square icon button
    <button
      className="w-9 h-9 rounded-xl border flex items-center justify-center hover:bg-violet-50 transition text-violet-600"
      style={{ borderColor: 'var(--c-border)' }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z" />
      </svg>
    </button>
  )
}
