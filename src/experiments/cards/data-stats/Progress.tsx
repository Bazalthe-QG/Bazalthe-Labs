// Multi progress bars
export default function Progress() {
  return (
    // Progress bars
    <div className="w-full space-y-3 p-1">
      {[
        ['Design', 85, 'bg-violet-500'],
        ['Development', 62, 'bg-blue-500'],
        ['QA', 30, 'bg-amber-500'],
      ].map(([label, val, color]) => (
        <div key={label as string}>
          <div
            className="flex justify-between text-[10px] mb-1"
            style={{ color: 'var(--c-muted)' }}
          >
            <span>{label}</span>
            <span>{val}%</span>
          </div>
          <div className="h-1.5 rounded-full w-full" style={{ background: 'var(--c-border)' }}>
            <div className={`h-1.5 rounded-full ${color}`} style={{ width: `${val}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}
