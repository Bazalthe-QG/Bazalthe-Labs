// App store card
export default function AppCard() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-lg font-bold">A</div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900">App Name</p>
          <p className="text-xs text-gray-500">Productivity • 4.8 ★</p>
        </div>
        <button className="px-3 py-1 rounded-lg bg-gray-100 text-xs font-semibold text-blue-500">GET</button>
      </div>
    </div>
  )
}
