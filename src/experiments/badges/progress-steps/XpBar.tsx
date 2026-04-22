// Experience bar with count
export default function XpBar() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-bold text-amber-600">3,240 XP</span>
      <div
        className="w-24 h-2 rounded-full overflow-hidden"
        style={{ background: 'var(--c-border)' }}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
          style={{ width: '72%' }}
        />
      </div>
      <span className="text-[10px] text-stone-400">4,500</span>
    </div>
  )
}
