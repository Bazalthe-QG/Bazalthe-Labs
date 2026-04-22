// Cut corner button
export default function ShapeCutCorner() {
  return (
    <button
      className="px-4 py-1.5 text-sm font-medium bg-violet-600 text-white hover:bg-violet-700 transition"
      style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}
    >
      Cut Corner
    </button>
  )
}
