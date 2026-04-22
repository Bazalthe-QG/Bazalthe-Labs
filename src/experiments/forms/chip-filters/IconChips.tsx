import { useState } from 'react'

// Icon label chip filters
export default function IconChips() {
  const items = [
    { label: 'Starred', icon: '★', color: '#f59e0b' },
    { label: 'Flagged', icon: '⚑', color: '#ef4444' },
    { label: 'Shared', icon: '↗', color: '#3b82f6' },
    { label: 'Mine', icon: '◉', color: '#8b5cf6' },
  ]
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(({ label, icon, color }) => (
        <IconChipItem key={label} label={label} icon={icon} color={color} />
      ))}
    </div>
  )
}

function IconChipItem({ label, icon, color }: { label: string; icon: string; color: string }) {
  const [on, setOn] = useState(false)
  return (
    <button onClick={() => setOn((o) => !o)}
      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition"
      style={{
        background: on ? `${color}15` : 'var(--c-surface)',
        color: on ? color : 'var(--c-muted)',
        border: `1px solid ${on ? color + '40' : 'var(--c-border)'}`,
      }}>
      <span>{icon}</span>
      {label}
    </button>
  )
}
