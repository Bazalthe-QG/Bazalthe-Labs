// Highlighted text
export default function Highlighted() {
  return (
    <p className="text-sm" style={{ color: 'var(--c-text)' }}>
      This has a <mark className="bg-yellow-200 px-1 rounded">highlighted</mark> word in it.
    </p>
  )
}
