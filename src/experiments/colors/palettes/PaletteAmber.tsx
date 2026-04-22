// Amber shade swatches

// Amber 100–1000
const shades = [
  '#fffbeb',
  '#fef3c7',
  '#fde68a',
  '#fcd34d',
  '#fbbf24',
  '#f59e0b',
  '#d97706',
  '#b45309',
  '#92400e',
  '#78350f',
]

export default function PaletteAmber() {
  return (
    <div className="flex gap-1">
      {shades.map((color, i) => (
        <div key={i} className="w-10 h-8 rounded-lg" style={{ background: color }} title={color} />
      ))}
    </div>
  )
}
