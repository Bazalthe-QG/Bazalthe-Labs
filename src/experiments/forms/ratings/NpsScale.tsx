// NPS recommendation scale
export default function NpsScale() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[10px] text-center" style={{ color: 'var(--c-muted)' }}>How likely are you to recommend?</p>
      <div className="flex gap-1">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
          <button key={n} className="w-7 h-7 rounded-lg text-[10px] font-semibold border transition hover:bg-violet-50 hover:border-violet-400"
            style={{ borderColor: 'var(--c-border)', color: 'var(--c-muted)' }}>{n}</button>
        ))}
      </div>
      <div className="flex justify-between text-[9px]" style={{ color: 'var(--c-muted)' }}>
        <span>Not likely</span>
        <span>Very likely</span>
      </div>
    </div>
  )
}
