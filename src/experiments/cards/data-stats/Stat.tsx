// Revenue stat card
export default function Stat() {
  return (
    // Stat card
    <div className="w-full p-1 space-y-1.5">
      <p className="text-xs" style={{ color: 'var(--c-muted)' }}>
        Monthly Revenue
      </p>
      <p className="text-2xl font-bold" style={{ color: 'var(--c-text)' }}>
        $24,821
      </p>
      <div className="flex items-center gap-1">
        <span className="text-[10px] font-semibold text-emerald-600">↑ 12.4%</span>
        <span className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
          vs last month
        </span>
      </div>
    </div>
  )
}
