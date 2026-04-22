// Trailing icon button
export default function IconTrailing() {
  return (
    // Trailing icon button
    <button
      className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-medium border text-violet-600 hover:bg-violet-50 transition"
      style={{ borderColor: 'var(--c-border)' }}
    >
      Continue{' '}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  )
}
