// Warning button with icon
export default function WarningIcon() {
  return (
    <button className="px-4 py-2 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 transition flex items-center gap-2">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4M12 17h.01" /><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>
      Warning
    </button>
  )
}
