const inputBase = 'w-full text-sm outline-none transition'

// Basic textarea
export default function TextareaInput() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Message</label>
      <textarea rows={3} placeholder="Write something…" className={`${inputBase} px-3 py-2 rounded-xl border resize-none`}
        style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
    </div>
  )
}
