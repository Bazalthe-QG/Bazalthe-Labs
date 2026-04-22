// Accent text token

// Links and actions color
export default function TextAccent() {
  return (
    <div className="w-full space-y-2">
      <div
        className="h-10 rounded-xl border"
        style={{ background: 'var(--c-accent)', borderColor: 'var(--c-border)' }}
      />
      <div>
        <p className="text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>
          --c-accent
        </p>
        <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
          Links, actions
        </p>
      </div>
    </div>
  )
}
