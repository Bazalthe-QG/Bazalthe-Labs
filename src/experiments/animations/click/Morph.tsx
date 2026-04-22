import { useState } from 'react'

// Shape morph on click
export default function Morph() {
  const [big, setBig] = useState(false)
  return (
    <button onClick={() => setBig(b => !b)}
      className="text-white font-bold text-sm flex items-center justify-center transition-all duration-500"
      style={{ width: big ? 80 : 48, height: big ? 40 : 48, borderRadius: big ? 20 : 24, background: 'var(--c-accent)' }}>
      {big ? 'Pill' : '●'}
    </button>
  )
}
