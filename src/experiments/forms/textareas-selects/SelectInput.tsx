const inputBase = 'w-full text-sm outline-none transition'

// Basic select dropdown
export default function SelectInput() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Category</label>
      <select className={`${inputBase} px-3 py-2 rounded-xl border`}
        style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }}>
        <option>Design</option>
        <option>Engineering</option>
        <option>Marketing</option>
      </select>
    </div>
  )
}
