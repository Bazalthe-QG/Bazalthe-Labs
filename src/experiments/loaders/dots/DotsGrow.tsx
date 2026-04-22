// Dots with growing size sequence
export default function DotsGrow() {
  return (
    <div className="flex items-center gap-1.5">
      {[0.7, 1, 1.4, 1].map((s, i) => (
        <div
          key={i}
          className="rounded-full animate-pulse"
          style={{
            width: `${s * 8}px`,
            height: `${s * 8}px`,
            background: 'var(--c-accent)',
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  )
}
