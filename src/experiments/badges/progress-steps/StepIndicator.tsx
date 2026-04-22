// Numbered step circles
export default function StepIndicator() {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center border-2 ${i <= 2 ? 'bg-violet-600 border-violet-600 text-white' : 'border-violet-300 text-violet-400'}`}
        >
          {i}
        </div>
      ))}
    </div>
  )
}
