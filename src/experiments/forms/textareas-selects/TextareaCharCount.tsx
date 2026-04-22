const inputBase = 'w-full text-sm outline-none transition'

// Textarea with character count
export default function TextareaCharCount() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Bio</label>
      <textarea rows={3} maxLength={280} placeholder="Tell us about you…"
        defaultValue="Front-end developer passionate about UI design."
        className={`${inputBase} px-3 py-2 rounded-xl border resize-none`}
        style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
      <div className="flex justify-end mt-1">
        <span className="text-[10px]" style={{ color: 'var(--c-muted)' }}>48 / 280</span>
      </div>
    </div>
  )
}
