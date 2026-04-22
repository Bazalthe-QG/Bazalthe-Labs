const inputBase = 'w-full text-sm outline-none transition'

// Date picker input
export default function DateInput() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Date</label>
      <input type="date" defaultValue="2026-04-17" className={`${inputBase} px-3 py-2 rounded-xl border`}
        style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
    </div>
  )
}
