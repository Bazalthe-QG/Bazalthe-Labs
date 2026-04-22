// Default border token

// Dividers and outlines color
export default function BorderDefault() {
  return (
    <div className="w-full space-y-2">
      <div
        className="h-10 rounded-xl border"
        style={{ background: 'var(--c-border)', borderColor: 'var(--c-border)' }}
      />
      <div>
        <p className="text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>
          --c-border
        </p>
        <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
          Dividers, outlines
        </p>
      </div>
    </div>
  )
}
