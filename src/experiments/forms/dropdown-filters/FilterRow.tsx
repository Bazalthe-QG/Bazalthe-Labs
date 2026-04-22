import { useState } from 'react'

function SelectFilter({ label, options }: { label: string; options: string[] }) {
  const [v, setV] = useState('')
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--c-muted)' }}>{label}</label>
      <select value={v} onChange={(e) => setV(e.target.value)} className="h-8 px-2 rounded-lg border text-sm outline-none"
        style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }}>
        <option value="">All</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}

// Three dropdown filter row
export default function FilterRow() {
  return (
    <div className="flex gap-3 flex-wrap">
      <SelectFilter label="Type" options={['Component', 'Layout', 'Pattern', 'Token']} />
      <SelectFilter label="Status" options={['Active', 'Draft', 'Archived']} />
      <SelectFilter label="Owner" options={['You', 'Team', 'Shared']} />
    </div>
  )
}
