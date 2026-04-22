// Violet shade swatches

// Violet 100–1000
const shades = [
  '#f5f3ff',
  '#ede9fe',
  '#ddd6fe',
  '#c4b5fd',
  '#a78bfa',
  '#8b5cf6',
  '#7c3aed',
  '#6d28d9',
  '#5b21b6',
  '#4c1d95',
]

export default function PaletteViolet() {
  return (
    <div className="flex gap-1">
      {shades.map((color, i) => (
        <div key={i} className="w-10 h-8 rounded-lg" style={{ background: color }} title={color} />
      ))}
    </div>
  )
}
