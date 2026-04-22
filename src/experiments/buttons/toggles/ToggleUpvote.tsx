import { useState } from 'react'

// Upvote counter button
export default function ToggleUpvote() {
  const [upvoted, setUpvoted] = useState(false)
  const [votes, setVotes] = useState(42)

  return (
    <button
      onClick={() => {
        setUpvoted((u) => !u)
        setVotes((v) => (upvoted ? v - 1 : v + 1))
      }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition"
      style={{
        background: upvoted ? '#f5f3ff' : 'transparent',
        color: upvoted ? 'var(--c-accent)' : 'var(--c-muted)',
        border: `1px solid ${upvoted ? 'rgba(109,40,217,0.3)' : 'var(--c-border)'}`,
      }}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill={upvoted ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      {votes}
    </button>
  )
}
