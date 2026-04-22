import { useState } from 'react'

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="px-3 py-1 rounded-full text-xs font-medium transition"
      style={{ background: active ? 'var(--c-accent)' : 'var(--c-surface)', color: active ? '#fff' : 'var(--c-muted)', border: `1px solid ${active ? 'var(--c-accent)' : 'var(--c-border)'}` }}>
      {label}
    </button>
  )
}

// Multi-select status chips
export default function MultiSelectChips() {
  const statuses = ['Active', 'Pending', 'Archived', 'Draft']
  const [activeStatuses, setActiveStatuses] = useState<string[]>([])
  const toggleStatus = (s: string) => {
    setActiveStatuses((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
  }
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[10px] uppercase font-bold tracking-widest" style={{ color: 'var(--c-muted)' }}>Status</p>
      <div className="flex flex-wrap gap-2">
        {statuses.map((s) => (
          <Chip key={s} label={s} active={activeStatuses.includes(s)} onClick={() => toggleStatus(s)} />
        ))}
      </div>
      {activeStatuses.length > 0 && (
        <button onClick={() => setActiveStatuses([])} className="text-[10px] self-start" style={{ color: 'var(--c-muted)' }}>Clear ×</button>
      )}
    </div>
  )
}
