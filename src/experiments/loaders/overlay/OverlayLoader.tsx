// Full-page loading overlay with blur
export default function OverlayLoader() {
  return (
    <div
      className="w-44 h-28 rounded-xl relative overflow-hidden"
      style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
        style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(2px)' }}
      >
        <div
          className="w-8 h-8 rounded-full border-4 animate-spin"
          style={{ borderColor: 'rgba(255,255,255,0.2)', borderTopColor: '#fff' }}
        />
        <span className="text-xs text-white font-medium">Loading…</span>
      </div>
    </div>
  )
}
