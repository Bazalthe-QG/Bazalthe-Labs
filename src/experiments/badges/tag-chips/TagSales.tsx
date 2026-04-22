// Sales tag chip
export default function TagSales() {
  return (
    <span
      className="flex items-center gap-1.5 pl-2.5 pr-2 py-0.5 rounded-full text-xs font-medium border bg-emerald-100 text-emerald-700"
      style={{ borderColor: '#a7f3d0' }}
    >
      Sales
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </span>
  )
}
