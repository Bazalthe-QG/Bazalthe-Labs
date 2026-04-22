import { useState } from 'react'

// Single range slider
export default function RangeSlider() {
  const [range, setRange] = useState(60)
  return (
    <div className="w-40 space-y-2">
      <div className="flex justify-between text-[10px]" style={{ color: 'var(--c-muted)' }}>
        <span>Volume</span>
        <span>{range}%</span>
      </div>
      <input type="range" min={0} max={100} value={range} onChange={(e) => setRange(+e.target.value)} className="w-full accent-violet-600" />
    </div>
  )
}
