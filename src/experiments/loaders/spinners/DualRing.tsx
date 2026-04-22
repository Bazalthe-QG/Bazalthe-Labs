// Dual ring spinner
export default function DualRing() {
  return (
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 border-2 border-violet-200 border-t-violet-500 rounded-full animate-spin" />
      <div className="absolute inset-1 border-2 border-fuchsia-200 border-b-fuchsia-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.6s' }} />
    </div>
  )
}
