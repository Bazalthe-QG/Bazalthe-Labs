// Date period filter
export default function DateFilter() {
  return (
    <div className="flex flex-col gap-3 w-64">
      <div className="flex gap-2">
        {['Today', 'Week', 'Month', 'Year'].map((p, i) => (
          <button key={p} className="flex-1 py-1 rounded-lg text-xs font-medium transition"
            style={{ background: i === 1 ? 'var(--c-accent)' : 'var(--c-surface)', color: i === 1 ? '#fff' : 'var(--c-muted)', border: `1px solid ${i === 1 ? 'var(--c-accent)' : 'var(--c-border)'}` }}>
            {p}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-[10px]" style={{ color: 'var(--c-muted)' }}>From</label>
          <input type="date" className="h-8 px-2 rounded-lg border text-xs outline-none w-full"
            style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-[10px]" style={{ color: 'var(--c-muted)' }}>To</label>
          <input type="date" className="h-8 px-2 rounded-lg border text-xs outline-none w-full"
            style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
        </div>
      </div>
    </div>
  )
}
