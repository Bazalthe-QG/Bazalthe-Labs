// Surface background token

// Card/panel background color
export default function BgSurface() {
  return (
    <div className="w-full space-y-2">
      <div
        className="h-10 rounded-xl border"
        style={{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }}
      />
      <div>
        <p className="text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>
          --c-surface
        </p>
        <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
          Card / panel
        </p>
      </div>
    </div>
  )
}
