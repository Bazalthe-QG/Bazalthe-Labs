// Blue shade swatches

// Blue 100–1000
const shades = [
  '#eff6ff',
  '#dbeafe',
  '#bfdbfe',
  '#93c5fd',
  '#60a5fa',
  '#3b82f6',
  '#2563eb',
  '#1d4ed8',
  '#1e40af',
  '#1e3a8a',
]

export default function PaletteBlue() {
  return (
    <div className="flex gap-1">
      {shades.map((color, i) => (
        <div key={i} className="w-10 h-8 rounded-lg" style={{ background: color }} title={color} />
      ))}
    </div>
  )
}
