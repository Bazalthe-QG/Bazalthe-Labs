const inputBase = 'w-full text-sm outline-none transition'

// Underline style input
export default function UnderlineInput() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Username</label>
      <input placeholder="@username" className={`${inputBase} px-0 py-1.5 border-b-2`}
        style={{ borderColor: 'var(--c-accent)', color: 'var(--c-text)', background: 'transparent' }} />
    </div>
  )
}
