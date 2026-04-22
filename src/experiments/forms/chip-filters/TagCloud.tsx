import { useState } from 'react'

// Tag cloud with toggle
export default function TagCloud() {
  const tags = ['React', 'TypeScript', 'Design', 'API', 'Mobile', 'Auth', 'CSS', 'Testing']
  const [activeTags, setActiveTags] = useState<string[]>(['React', 'Design'])
  const toggleTag = (t: string) => {
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
  }
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <button key={t} onClick={() => toggleTag(t)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition"
          style={{
            background: activeTags.includes(t) ? 'rgba(109,40,217,0.1)' : 'var(--c-surface)',
            color: activeTags.includes(t) ? 'var(--c-accent)' : 'var(--c-muted)',
            border: `1px solid ${activeTags.includes(t) ? 'rgba(109,40,217,0.3)' : 'var(--c-border)'}`,
            fontWeight: activeTags.includes(t) ? 600 : 400,
          }}>
          {activeTags.includes(t) && (
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
          {t}
        </button>
      ))}
    </div>
  )
}
