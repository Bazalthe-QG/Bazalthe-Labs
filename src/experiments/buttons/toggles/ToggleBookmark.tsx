import { useState } from 'react'

// Bookmark toggle button
export default function ToggleBookmark() {
  const [saved, setSaved] = useState(false)

  return (
    <button
      onClick={() => setSaved((s) => !s)}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition"
      style={{
        background: saved ? 'rgba(109,40,217,0.08)' : 'transparent',
        color: saved ? 'var(--c-accent)' : 'var(--c-muted)',
        border: `1px solid ${saved ? 'rgba(109,40,217,0.3)' : 'var(--c-border)'}`,
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={saved ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
      </svg>
      {saved ? 'Saved' : 'Save'}
    </button>
  )
}
