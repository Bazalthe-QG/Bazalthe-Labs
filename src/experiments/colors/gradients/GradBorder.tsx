// Gradient border wrapper

// Gradient outline with inner surface
export default function GradBorder({ style }: { style: string }) {
  return (
    <div className="p-0.5 rounded-xl" style={{ background: style }}>
      <div
        className="rounded-[10px] px-4 py-3 flex items-center justify-center"
        style={{ background: 'var(--c-surface)' }}
      >
        <span className="text-xs font-semibold" style={{ color: 'var(--c-text)' }}>
          Gradient border
        </span>
      </div>
    </div>
  )
}
