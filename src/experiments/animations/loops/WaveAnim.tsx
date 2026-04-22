// Wave animation
export default function WaveAnim() {
  return (
    <>
      <style>{`@keyframes wave{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}`}</style>
      <div className="flex gap-0.5">
        {[0,1,2,3,4,5].map(i => (
          <div key={i} className="w-1.5 h-10 bg-violet-500 rounded-full" style={{ animation: `wave 1s ${i*0.1}s ease infinite` }} />
        ))}
      </div>
    </>
  )
}
