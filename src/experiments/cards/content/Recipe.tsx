// Food recipe card
// Recipe card with details
export default function Recipe() {
  return (
    <div className="w-full space-y-2 p-1">
      <div className="h-20 rounded-xl bg-gradient-to-br from-orange-300 to-red-400 flex items-center justify-center">
        <span className="text-3xl">🍝</span>
      </div>
      <p className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>
        Pasta Carbonara
      </p>
      <div className="flex gap-3 text-[10px]" style={{ color: 'var(--c-muted)' }}>
        <span>⏱ 20 min</span>
        <span>👤 2 servings</span>
        <span>★ 4.8</span>
      </div>
    </div>
  )
}
