import { useState } from 'react'

// Multi-select chip input
export default function MultiSelectInput() {
  const [multiSel, setMultiSel] = useState<string[]>(['Design'])
  const toggleMulti = (v: string) => setMultiSel((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]))
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-2" style={{ color: 'var(--c-muted)' }}>Teams</label>
      <div className="flex flex-wrap gap-1.5">
        {['Design', 'Engineering', 'Marketing', 'Sales', 'Ops'].map((t) => (
          <button key={t} onClick={() => toggleMulti(t)}
            className="px-2.5 py-0.5 rounded-full text-xs font-medium border transition"
            style={{ background: multiSel.includes(t) ? 'var(--c-accent)' : 'transparent', color: multiSel.includes(t) ? 'white' : 'var(--c-muted)', borderColor: multiSel.includes(t) ? 'var(--c-accent)' : 'var(--c-border)' }}>
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}
