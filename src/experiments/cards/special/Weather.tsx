// Weather info card
export default function Weather() {
  return (
    // Weather card
    <div className="w-full p-1 text-center space-y-1">
      <p className="text-3xl">⛅</p>
      <p className="text-2xl font-bold" style={{ color: 'var(--c-text)' }}>
        18°C
      </p>
      <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
        Partly cloudy · Paris
      </p>
      <div className="flex justify-between text-[9px] pt-1" style={{ color: 'var(--c-muted)' }}>
        <span>↓ 12°</span>
        <span>↑ 22°</span>
      </div>
    </div>
  )
}
