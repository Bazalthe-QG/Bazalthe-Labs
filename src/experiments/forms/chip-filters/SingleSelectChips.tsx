import { useState } from 'react'

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="px-3 py-1 rounded-full text-xs font-medium transition"
      style={{ background: active ? 'var(--c-accent)' : 'var(--c-surface)', color: active ? '#fff' : 'var(--c-muted)', border: `1px solid ${active ? 'var(--c-accent)' : 'var(--c-border)'}` }}>
      {label}
    </button>
  )
}

// Single-select pill chips
export default function SingleSelectChips() {
  const categories = ['All', 'Design', 'Code', 'Marketing', 'Product']
  const [activeCat, setActiveCat] = useState('All')
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <Chip key={c} label={c} active={activeCat === c} onClick={() => setActiveCat(c)} />
      ))}
    </div>
  )
}
