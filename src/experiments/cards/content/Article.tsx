// Blog article card
// Article card with metadata
export default function Article() {
  return (
    <div
      className="w-full rounded-xl overflow-hidden border"
      style={{ borderColor: 'var(--c-border)' }}
    >
      <div className="h-24 bg-gradient-to-br from-amber-400 to-orange-500 flex items-end p-3">
        <span className="text-[10px] font-medium bg-white/20 text-white px-2 py-0.5 rounded-full">
          Design
        </span>
      </div>
      <div className="p-3">
        <p className="text-sm font-semibold leading-snug mb-1" style={{ color: 'var(--c-text)' }}>
          The future of UI design systems
        </p>
        <p className="text-xs" style={{ color: 'var(--c-muted)' }}>
          How modern tooling is changing the way teams collaborate…
        </p>
        <div
          className="flex items-center justify-between mt-2.5 pt-2.5 border-t"
          style={{ borderColor: 'var(--c-border)' }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-amber-300" />
            <span className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
              Alex B.
            </span>
          </div>
          <span className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
            5 min
          </span>
        </div>
      </div>
    </div>
  )
}
