import { useState } from 'react'

// Double min/max range sliders
export default function DoubleRange() {
  const [range, setRange] = useState(60)
  const [range2, setRange2] = useState(30)
  return (
    <div className="w-44 space-y-3">
      <div className="flex justify-between text-[10px]" style={{ color: 'var(--c-muted)' }}>
        <span>Min: €{range2}</span>
        <span>Max: €{range}</span>
      </div>
      <input type="range" min={0} max={100} value={range2} onChange={(e) => setRange2(+e.target.value)} className="w-full accent-violet-600" />
      <input type="range" min={0} max={100} value={range} onChange={(e) => setRange(+e.target.value)} className="w-full accent-violet-600" />
    </div>
  )
}
