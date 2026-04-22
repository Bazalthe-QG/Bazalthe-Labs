import { useState } from 'react'

// 3D flip on click
export default function Flip() {
  const [flipped, setFlipped] = useState(false)
  return (
    <button onClick={() => setFlipped(f => !f)}
      className="w-14 h-14 rounded-xl text-sm font-bold text-white flex items-center justify-center"
      style={{ background: 'var(--c-accent)', transform: flipped ? 'rotateY(180deg)' : 'none', transition: 'transform .5s ease', transformStyle: 'preserve-3d' }}>
      {flipped ? '🔁' : '↺'}
    </button>
  )
}
