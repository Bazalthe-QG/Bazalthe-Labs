// Rose shade swatches

// Rose 100–1000
const shades = [
  '#fff1f2',
  '#ffe4e6',
  '#fecdd3',
  '#fda4af',
  '#fb7185',
  '#f43f5e',
  '#e11d48',
  '#be123c',
  '#9f1239',
  '#881337',
]

export default function PaletteRose() {
  return (
    <div className="flex gap-1">
      {shades.map((color, i) => (
        <div key={i} className="w-10 h-8 rounded-lg" style={{ background: color }} title={color} />
      ))}
    </div>
  )
}
