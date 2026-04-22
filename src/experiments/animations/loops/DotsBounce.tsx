// Bouncing dots
export default function DotsBounce() {
  return (
    <>
      <style>{`@keyframes dotBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}`}</style>
      <div className="flex gap-1.5">
        {[0,1,2].map(i => (
          <div key={i} className="w-3 h-3 rounded-full bg-violet-500" style={{ animation: `dotBounce 0.6s ${i*0.15}s ease infinite` }} />
        ))}
      </div>
    </>
  )
}
