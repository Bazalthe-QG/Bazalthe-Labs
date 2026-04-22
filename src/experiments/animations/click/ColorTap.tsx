import { useState } from 'react'

// Cycle colors on tap
const COLORS = ['bg-violet-500', 'bg-pink-500', 'bg-blue-500', 'bg-emerald-500', 'bg-amber-500']

export default function ColorTap() {
  const [colorIdx, setColorIdx] = useState(0)
  return (
    <button onClick={() => setColorIdx(i => (i + 1) % COLORS.length)}
      className={`w-14 h-14 rounded-xl ${COLORS[colorIdx]} transition-colors duration-300 text-white text-xs font-semibold`}>
      Tap
    </button>
  )
}
