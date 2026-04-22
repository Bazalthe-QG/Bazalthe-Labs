// Focused input shadow
export default function InputFocus() {
  return (
    <input
      className="px-3 py-1.5 rounded-xl text-sm outline-none border-2 transition"
      style={{
        borderColor: 'var(--c-accent)',
        color: 'var(--c-text)',
        background: 'var(--c-surface)',
        boxShadow: '0 0 0 3px rgba(109,40,217,0.15)',
      }}
      defaultValue="Focused input"
    />
  )
}
