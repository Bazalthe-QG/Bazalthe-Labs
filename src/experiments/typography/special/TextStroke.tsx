// Text stroke effect
export default function TextStroke() {
  return (
    <span className="text-3xl font-bold" style={{ WebkitTextStroke: '1px currentColor', WebkitTextFillColor: 'transparent', color: 'var(--c-text)' }}>
      Outlined
    </span>
  )
}
