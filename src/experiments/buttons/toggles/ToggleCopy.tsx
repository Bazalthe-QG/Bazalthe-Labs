import { useState } from 'react'

// Copy clipboard button
export default function ToggleCopy() {
  const [copied, setCopied] = useState(false)

  return (
    <button
      onClick={() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition"
      style={{
        background: copied ? '#d1fae5' : 'transparent',
        color: copied ? '#065f46' : 'var(--c-muted)',
        border: `1px solid ${copied ? '#6ee7b7' : 'var(--c-border)'}`,
      }}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {copied ? (
          <polyline points="20 6 9 17 4 12" />
        ) : (
          <>
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </>
        )}
      </svg>
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}
