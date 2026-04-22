const inputBase = 'w-full text-sm outline-none transition'

// Success state input
export default function SuccessInput() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5 text-emerald-600">Email</label>
      <div className="relative">
        <input defaultValue="lea@example.com" className={`${inputBase} px-3 py-2 rounded-xl border border-emerald-400 pr-9`}
          style={{ background: 'var(--c-bg)', color: 'var(--c-text)' }} />
        <svg className="absolute right-3 top-1/2 -translate-y-1/2" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  )
}
