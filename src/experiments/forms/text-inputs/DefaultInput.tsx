const inputBase = 'w-full text-sm outline-none transition'

// Default text input
export default function DefaultInput() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Email</label>
      <input placeholder="you@example.com" className={`${inputBase} px-3 py-2 rounded-xl border`}
        style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
    </div>
  )
}
