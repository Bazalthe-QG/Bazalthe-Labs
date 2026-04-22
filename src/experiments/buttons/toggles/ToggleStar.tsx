import { useState } from 'react'

// Star rating button
export default function ToggleStar() {
  const [starred, setStarred] = useState(false)

  return (
    <button
      onClick={() => setStarred((s) => !s)}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition"
      style={{
        color: starred ? '#d97706' : 'var(--c-muted)',
        border: `1px solid ${starred ? '#fcd34d' : 'var(--c-border)'}`,
        background: starred ? '#fffbeb' : 'transparent',
      }}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill={starred ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
      {starred ? 'Starred' : 'Star'}
    </button>
  )
}
