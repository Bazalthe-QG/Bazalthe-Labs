// Horizontal product card
export default function HorizontalProduct() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white flex overflow-hidden">
      <div className="w-24 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-3xl shrink-0">🎧</div>
      <div className="p-3 flex-1">
        <p className="text-sm font-semibold text-gray-900">Wireless Headphones</p>
        <p className="text-xs text-gray-500">40h battery • ANC</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-bold text-gray-900">$89.99</span>
          <span className="text-xs text-emerald-500 font-medium">In stock</span>
        </div>
      </div>
    </div>
  )
}
