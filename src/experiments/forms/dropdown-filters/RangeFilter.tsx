import { useState } from 'react'

// Dual range price filter
export default function RangeFilter() {
  const [range, setRange] = useState({ min: 20, max: 80 })
  return (
    <div className="w-64 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold" style={{ color: 'var(--c-muted)' }}>Price range</span>
        <span className="text-xs font-bold" style={{ color: 'var(--c-accent)' }}>${range.min} – ${range.max}</span>
      </div>
      <div className="flex gap-3">
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-[10px]" style={{ color: 'var(--c-muted)' }}>Min</label>
          <input type="range" min={0} max={100} value={range.min}
            onChange={(e) => setRange((r) => ({ ...r, min: Math.min(Number(e.target.value), r.max - 5) }))}
            className="w-full accent-violet-600" />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-[10px]" style={{ color: 'var(--c-muted)' }}>Max</label>
          <input type="range" min={0} max={100} value={range.max}
            onChange={(e) => setRange((r) => ({ ...r, max: Math.max(Number(e.target.value), r.min + 5) }))}
            className="w-full accent-violet-600" />
        </div>
      </div>
    </div>
  )
}
