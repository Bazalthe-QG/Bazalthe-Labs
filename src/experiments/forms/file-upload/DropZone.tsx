// Drag and drop zone
export default function DropZone() {
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Upload</label>
      <div className="flex flex-col items-center gap-2 py-5 px-4 rounded-xl border-2 border-dashed cursor-pointer hover:border-violet-400 hover:bg-violet-50/50 transition"
        style={{ borderColor: 'var(--c-border)' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--c-muted)' }}>
          <polyline points="16 16 12 12 8 16" />
          <line x1="12" y1="12" x2="12" y2="21" />
          <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
        </svg>
        <div className="text-center">
          <p className="text-xs font-medium" style={{ color: 'var(--c-text)' }}>Drop files here</p>
          <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>PNG, JPG, PDF up to 10MB</p>
        </div>
      </div>
    </div>
  )
}
