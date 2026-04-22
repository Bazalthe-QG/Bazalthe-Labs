// Ring pulse spinner
export default function RingPulse() {
  return (
    <>  
      <style>{`@keyframes ringPulse{0%{transform:scale(0.8);opacity:1}100%{transform:scale(1.4);opacity:0}}`}</style>
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 border-2 border-violet-400 rounded-full" style={{ animation: 'ringPulse 1s ease infinite' }} />
        <div className="absolute inset-0 border-2 border-violet-400 rounded-full" style={{ animation: 'ringPulse 1s 0.3s ease infinite' }} />
      </div>
    </>
  )
}
