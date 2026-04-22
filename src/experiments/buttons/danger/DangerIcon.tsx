// Danger button with icon
export default function DangerIcon() {
  return (
    <button className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition flex items-center gap-2">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      Delete
    </button>
  )
}
