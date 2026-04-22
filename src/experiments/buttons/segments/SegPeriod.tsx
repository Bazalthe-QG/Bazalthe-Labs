import { useState } from 'react'

// Period segmented control
export default function SegPeriod() {
  const [seg, setSeg] = useState('week')

  return (
    <div className="inline-flex p-1 rounded-xl gap-0.5" style={{ background: 'var(--c-border)' }}>
      {['day', 'week', 'month', 'year'].map((v) => (
        <button
          key={v}
          onClick={() => setSeg(v)}
          className="px-3 py-1 rounded-lg text-xs font-semibold capitalize transition"
          style={{
            background: seg === v ? 'var(--c-surface)' : 'transparent',
            color: seg === v ? 'var(--c-accent)' : 'var(--c-muted)',
            boxShadow: seg === v ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
          }}
        >
          {v}
        </button>
      ))}
    </div>
  )
}
