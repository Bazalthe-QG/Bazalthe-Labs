// Sessions mini chart
export default function MiniChart() {
  return (
    // Mini bar chart
    <div className="w-full p-1 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium" style={{ color: 'var(--c-text)' }}>
          Sessions
        </span>
        <span className="text-xs text-emerald-600 font-semibold">↑ 8%</span>
      </div>
      <div className="flex items-end gap-1 h-10">
        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: i === 5 ? 'var(--c-accent)' : 'var(--c-border)',
            }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[9px]" style={{ color: 'var(--c-muted)' }}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  )
}
