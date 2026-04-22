// Animated bars
export default function Bars() {
  return (
    <>
      <style>{`@keyframes bar{0%,100%{transform:scaleY(0.4)}50%{transform:scaleY(1)}}`}</style>
      <div className="flex items-end gap-1 h-16">
        {[0,1,2,3,4].map(i => (
          <div key={i} className="w-2 bg-violet-500 rounded-sm" style={{ height: 40, transformOrigin: 'bottom', animation: `bar 0.8s ${i*0.1}s ease infinite` }} />
        ))}
      </div>
    </>
  )
}
