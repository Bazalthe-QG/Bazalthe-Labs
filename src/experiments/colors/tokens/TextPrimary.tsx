// Primary text token

// Main content text color
export default function TextPrimary() {
  return (
    <div className="w-full space-y-2">
      <div
        className="h-10 rounded-xl border"
        style={{ background: 'var(--c-text)', borderColor: 'var(--c-border)' }}
      />
      <div>
        <p className="text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>
          --c-text
        </p>
        <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
          Main content text
        </p>
      </div>
    </div>
  )
}
