// Star level badge pill
export default function LevelBadge() {
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <span className="text-[11px] font-bold text-white">Lv 42</span>
    </div>
  )
}
