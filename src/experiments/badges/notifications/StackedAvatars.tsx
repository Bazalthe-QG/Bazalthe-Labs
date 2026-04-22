// Overlapping avatar stack
export default function StackedAvatars() {
  return (
    <div className="flex -space-x-2">
      {[
        ['from-violet-400 to-pink-400', 'J'],
        ['from-sky-400 to-blue-500', 'M'],
        ['from-rose-400 to-red-500', 'A'],
        ['from-emerald-400 to-teal-500', 'K'],
      ].map(([g, l], i) => (
        <div
          key={i}
          className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} flex items-center justify-center text-xs font-bold text-white ring-2 ring-white`}
        >
          {l}
        </div>
      ))}
      <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-[10px] font-bold text-stone-600 ring-2 ring-white">
        +5
      </div>
    </div>
  )
}
