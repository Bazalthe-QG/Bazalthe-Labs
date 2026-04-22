import { useState } from 'react'

// Tag input with pills
export default function TagInput() {
  const [tags, setTags] = useState(['React', 'TypeScript'])
  const [tagInput, setTagInput] = useState('')
  const addTag = () => {
    const t = tagInput.trim()
    if (t && !tags.includes(t)) setTags((prev) => [...prev, t])
    setTagInput('')
  }
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Tags</label>
      <div className="flex flex-wrap gap-1.5 p-2 rounded-xl border min-h-[40px] items-center"
        style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)' }}>
        {tags.map((t) => (
          <span key={t} className="flex items-center gap-1 pl-2 pr-1.5 py-0.5 rounded-full text-xs font-medium bg-violet-100 text-violet-700">
            {t}
            <button onClick={() => setTags((ts) => ts.filter((x) => x !== t))} className="hover:text-violet-900 transition">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </span>
        ))}
        <input value={tagInput} onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag() } }}
          placeholder="Add tag…" className="flex-1 min-w-[80px] text-xs outline-none bg-transparent" style={{ color: 'var(--c-text)' }} />
      </div>
      <p className="text-[10px] mt-1" style={{ color: 'var(--c-muted)' }}>Press Enter or comma to add</p>
    </div>
  )
}
