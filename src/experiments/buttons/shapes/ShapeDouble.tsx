// Double border button
export default function ShapeDouble() {
  return (
    <button
      className="px-4 py-1.5 rounded-lg text-sm font-medium text-violet-600 bg-transparent hover:bg-violet-600/10 transition"
      style={{ outline: '2px solid #7c3aed', outlineOffset: '3px', border: '1.5px solid #7c3aed' }}
    >
      Double
    </button>
  )
}
