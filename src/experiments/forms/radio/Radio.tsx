import { useState } from 'react'

// Radio button group
export default function Radio() {
  const [radio, setRadio] = useState('b')
  return (
    <div className="flex flex-col gap-2.5">
      {[['a', 'Option A'], ['b', 'Option B'], ['c', 'Option C']].map(([v, l]) => (
        <label key={v} className="flex items-center gap-2.5 cursor-pointer" onClick={() => setRadio(v)}>
          <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0"
            style={{ borderColor: radio === v ? 'var(--c-accent)' : 'var(--c-border)' }}>
            {radio === v && <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--c-accent)' }} />}
          </div>
          <span className="text-xs" style={{ color: 'var(--c-text)' }}>{l}</span>
        </label>
      ))}
    </div>
  )
}
