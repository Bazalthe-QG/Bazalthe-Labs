// Ping ripple loader
export default function PingLoader() {
  return (
    <div className="relative flex items-center justify-center w-10 h-10">
      <div className="w-3 h-3 rounded-full" style={{ background: 'var(--c-accent)' }} />
      <div
        className="absolute w-3 h-3 rounded-full animate-ping"
        style={{ background: 'var(--c-accent)' }}
      />
    </div>
  )
}
