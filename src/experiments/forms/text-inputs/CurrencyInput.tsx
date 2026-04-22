// Currency euro input
export default function CurrencyInput() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Amount</label>
      <div className="flex rounded-xl border overflow-hidden" style={{ borderColor: 'var(--c-border)' }}>
        <span className="flex items-center px-3 text-sm font-semibold border-r" style={{ background: 'var(--c-border)', color: 'var(--c-muted)', borderColor: 'var(--c-border)' }}>€</span>
        <input type="number" placeholder="0.00" className="flex-1 text-sm px-3 py-2 outline-none" style={{ background: 'var(--c-bg)', color: 'var(--c-text)' }} />
      </div>
    </div>
  )
}
