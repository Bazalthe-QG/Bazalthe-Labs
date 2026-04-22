import { useState } from 'react'

// Like toggle button
export default function ToggleLike() {
  const [liked, setLiked] = useState(false)

  return (
    <button
      onClick={() => setLiked((l) => !l)}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition"
      style={{
        background: liked ? '#fee2e2' : 'transparent',
        color: liked ? '#dc2626' : 'var(--c-muted)',
        border: `1px solid ${liked ? '#fca5a5' : 'var(--c-border)'}`,
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={liked ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
      {liked ? 'Liked' : 'Like'}
    </button>
  )
}
