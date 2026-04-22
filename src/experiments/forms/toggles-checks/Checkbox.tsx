import { useState } from 'react'

// Custom checkboxes
export default function Checkbox() {
  const [checks, setChecks] = useState([true, false, true])
  return (
    <div className="flex flex-col gap-2.5">
      {['Design', 'Engineering', 'Marketing'].map((t, i) => (
        <label key={t} className="flex items-center gap-2.5 cursor-pointer">
          <button onClick={() => setChecks((c) => c.map((v, j) => (j === i ? !v : v)))}
            className="w-4 h-4 rounded border flex items-center justify-center shrink-0 transition"
            style={{ background: checks[i] ? 'var(--c-accent)' : 'transparent', borderColor: checks[i] ? 'var(--c-accent)' : 'var(--c-border)' }}>
            {checks[i] && (
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </button>
          <span className="text-xs" style={{ color: 'var(--c-text)' }}>{t}</span>
        </label>
      ))}
    </div>
  )
}
