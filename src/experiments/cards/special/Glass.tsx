// Glassmorphism effect card
export default function Glass() {
  return (
    // Glass card
    <div className="w-full h-28 rounded-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-600 to-pink-500" />
      <div
        className="absolute inset-2 rounded-lg p-3 flex flex-col justify-between"
        style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.25)',
        }}
      >
        <p className="text-white text-xs font-semibold">Glassmorphism</p>
        <p className="text-white/70 text-[10px]">backdrop-filter: blur</p>
      </div>
    </div>
  )
}
