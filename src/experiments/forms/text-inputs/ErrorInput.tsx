const inputBase = 'w-full text-sm outline-none transition'

// Error state input
export default function ErrorInput() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5 text-red-500">Password</label>
      <input defaultValue="123" className={`${inputBase} px-3 py-2 rounded-xl border border-red-400`}
        style={{ background: 'var(--c-bg)', color: 'var(--c-text)' }} />
      <p className="text-[10px] text-red-500 mt-1">Must be at least 8 characters</p>
    </div>
  )
}
