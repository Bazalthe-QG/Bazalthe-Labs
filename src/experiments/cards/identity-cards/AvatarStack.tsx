// Stacked avatar group
// Avatar stack with count
export default function AvatarStack() {
  return (
    <div
      className="w-full p-3 rounded-xl border space-y-2.5"
      style={{ borderColor: 'var(--c-border)' }}
    >
      <div className="flex -space-x-2">
        {[
          'from-violet-400 to-indigo-500',
          'from-pink-400 to-rose-500',
          'from-amber-400 to-orange-500',
          'from-teal-400 to-cyan-500',
        ].map((g, i) => (
          <div
            key={i}
            className={`w-7 h-7 rounded-full bg-gradient-to-br ${g} border-2 border-white`}
          />
        ))}
        <div className="w-7 h-7 rounded-full bg-stone-200 border-2 border-white flex items-center justify-center text-[9px] font-bold text-stone-600">
          +8
        </div>
      </div>
      <p className="text-[11px]" style={{ color: 'var(--c-muted)' }}>
        12 members collaborating
      </p>
    </div>
  )
}
