// Chat typing indicator with bouncing dots
export default function TypingIndicator() {
  return (
    <span
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
      style={{ background: 'var(--c-border)' }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  )
}
