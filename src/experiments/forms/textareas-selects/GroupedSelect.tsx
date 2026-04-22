const inputBase = 'w-full text-sm outline-none transition'

// Grouped select with optgroups
export default function GroupedSelect() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Country</label>
      <select className={`${inputBase} px-3 py-2 rounded-xl border`}
        style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }}>
        <optgroup label="Europe">
          <option>France</option>
          <option>Germany</option>
        </optgroup>
        <optgroup label="Americas">
          <option>USA</option>
          <option>Canada</option>
        </optgroup>
      </select>
    </div>
  )
}
