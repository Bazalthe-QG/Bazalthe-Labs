// Three pulsing dots with staggered delay
export default function DotsPulse() {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2.5 h-2.5 rounded-full animate-pulse"
          style={{ background: 'var(--c-accent)', animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  )
}
