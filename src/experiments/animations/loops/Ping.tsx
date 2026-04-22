// Ping animation
export default function Ping() {
  return (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-xl bg-sky-400 animate-ping opacity-75" />
      <div className="relative w-16 h-16 rounded-xl bg-sky-500" />
    </div>
  )
}
