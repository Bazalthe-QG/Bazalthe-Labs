// Animated ellipsis loading text
export default function Ellipsis() {
  return (
    <div className="flex items-center text-sm font-medium" style={{ color: 'var(--c-muted)' }}>
      Loading
      {[0.2, 0.4, 0.6].map((d, i) => (
        <span key={i} className="animate-bounce ml-0.5" style={{ animationDelay: `${d}s` }}>
          .
        </span>
      ))}
    </div>
  )
}
