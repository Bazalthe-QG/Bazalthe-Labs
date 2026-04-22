// Emerald shade swatches

// Emerald 100–1000
const shades = [
  '#ecfdf5',
  '#d1fae5',
  '#a7f3d0',
  '#6ee7b7',
  '#34d399',
  '#10b981',
  '#059669',
  '#047857',
  '#065f46',
  '#064e3b',
]

export default function PaletteEmerald() {
  return (
    <div className="flex gap-1">
      {shades.map((color, i) => (
        <div key={i} className="w-10 h-8 rounded-lg" style={{ background: color }} title={color} />
      ))}
    </div>
  )
}
