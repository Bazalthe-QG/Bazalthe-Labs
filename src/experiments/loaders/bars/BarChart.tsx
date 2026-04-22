// Animated bar chart
export default function BarChart() {
  return (
    <>
      <style>{`@keyframes barGrow{from{transform:scaleY(0)}to{transform:scaleY(1)}}`}</style>
      <div className="flex items-end gap-1 h-12">
        {[60,80,40,90,50].map((h,i) => (
          <div key={i} className="w-3 bg-violet-500 rounded-t" style={{ height: h+'%', transformOrigin:'bottom', animation: `barGrow 0.5s ${i*0.1}s ease both` }} />
        ))}
      </div>
    </>
  )
}
