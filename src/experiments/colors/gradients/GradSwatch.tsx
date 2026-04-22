// Gradient color swatch

// Rounded gradient rectangle
export default function GradSwatch({ style }: { style: string }) {
  return <div className="w-full h-16 rounded-xl" style={{ background: style }} />
}
