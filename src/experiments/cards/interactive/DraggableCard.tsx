// Draggable card
export default function DraggableCard() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2">
        <span className="text-gray-300 text-sm">⠿</span>
        <div>
          <p className="text-sm font-semibold text-gray-900">Draggable Item</p>
          <p className="text-xs text-gray-500">Grab to reorder</p>
        </div>
      </div>
    </div>
  )
}
