// Product card
export default function Product() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white overflow-hidden">
      <div className="h-32 bg-gradient-to-br from-violet-100 to-fuchsia-50 flex items-center justify-center text-4xl">👟</div>
      <div className="p-4">
        <p className="text-sm font-semibold text-gray-900">Running Shoes</p>
        <p className="text-xs text-gray-500 mt-1">Lightweight & breathable</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-sm font-bold text-violet-600">$129.99</span>
          <button className="px-3 py-1 rounded-lg bg-violet-500 text-white text-xs font-medium">Add to cart</button>
        </div>
      </div>
    </div>
  )
}
