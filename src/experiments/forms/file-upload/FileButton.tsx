// File upload button
export default function FileButton() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Attachment</label>
      <label className="flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer hover:bg-violet-50 transition text-sm"
        style={{ borderColor: 'var(--c-border)', color: 'var(--c-muted)' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        Choose file…
        <input type="file" className="hidden" />
      </label>
    </div>
  )
}
