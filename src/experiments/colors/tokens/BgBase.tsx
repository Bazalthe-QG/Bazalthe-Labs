// Base background token

// App background color
export default function BgBase() {
  return (
    <div className="w-full space-y-2">
      <div
        className="h-10 rounded-xl border"
        style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)' }}
      />
      <div>
        <p className="text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>
          --c-bg
        </p>
        <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
          App background
        </p>
      </div>
    </div>
  )
}
