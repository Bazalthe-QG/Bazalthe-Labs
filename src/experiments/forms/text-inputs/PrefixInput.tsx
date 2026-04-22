// Input with URL prefix
export default function PrefixInput() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Website</label>
      <div className="flex rounded-xl border overflow-hidden" style={{ borderColor: 'var(--c-border)' }}>
        <span className="flex items-center px-3 text-xs border-r" style={{ background: 'var(--c-border)', color: 'var(--c-muted)', borderColor: 'var(--c-border)' }}>https://</span>
        <input placeholder="example.com" className="flex-1 text-sm px-3 py-2 outline-none" style={{ background: 'var(--c-bg)', color: 'var(--c-text)' }} />
      </div>
    </div>
  )
}
