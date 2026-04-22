import { useState } from 'react'

// Subscribe toggle button
export default function ToggleSubscribe() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <button
      onClick={() => setSubscribed((s) => !s)}
      className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-medium transition"
      style={{
        background: subscribed ? '#fef3c7' : '#1c1917',
        color: subscribed ? '#92400e' : 'white',
      }}
    >
      {subscribed ? '✓ Subscribed' : '▶ Subscribe'}
    </button>
  )
}
