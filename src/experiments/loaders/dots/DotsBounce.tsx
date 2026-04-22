// Three bouncing dots
export default function DotsBounce() {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2.5 h-2.5 rounded-full animate-bounce"
          style={{ background: 'var(--c-accent)', animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  )
}
