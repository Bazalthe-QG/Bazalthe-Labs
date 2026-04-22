import { useState } from 'react'

// Follow toggle button
export default function ToggleFollow() {
  const [followed, setFollowed] = useState(false)

  return (
    <button
      onClick={() => setFollowed((f) => !f)}
      className="px-4 py-1.5 rounded-xl text-sm font-semibold transition"
      style={{
        background: followed ? 'transparent' : 'var(--c-accent)',
        color: followed ? 'var(--c-text)' : 'white',
        border: `1px solid ${followed ? 'var(--c-border)' : 'transparent'}`,
      }}
    >
      {followed ? 'Following' : 'Follow'}
    </button>
  )
}
