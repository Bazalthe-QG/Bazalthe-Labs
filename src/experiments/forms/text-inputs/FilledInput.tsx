const inputBase = 'w-full text-sm outline-none transition'

// Filled style input
export default function FilledInput() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Name</label>
      <input defaultValue="Léa Moreau" className={`${inputBase} px-3 py-2 rounded-xl`}
        style={{ background: 'var(--c-border)', color: 'var(--c-text)' }} />
    </div>
  )
}
