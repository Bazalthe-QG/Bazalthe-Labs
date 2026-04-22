// Gradient text effect

// Clipped gradient text
export default function GradText({ style }: { style: string }) {
  return (
    <span
      className="text-xl font-black"
      style={{
        background: style,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      Gradient
    </span>
  )
}
