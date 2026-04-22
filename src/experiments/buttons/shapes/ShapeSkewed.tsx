// Skewed transform button
export default function ShapeSkewed() {
  return (
    <button
      className="px-5 py-1.5 text-sm font-medium bg-violet-600 text-white hover:bg-violet-700 transition"
      style={{ transform: 'skewX(-12deg)', borderRadius: 4 }}
    >
      <span style={{ display: 'inline-block', transform: 'skewX(12deg)' }}>Skewed</span>
    </button>
  )
}
