// Tab keyboard key
export default function KeyTab() {
  return (
    <kbd
      className="px-2 py-1 rounded-md text-xs font-mono font-semibold"
      style={{
        background: 'var(--c-surface)',
        color: 'var(--c-text)',
        border: '1px solid var(--c-border)',
        borderBottom: '3px solid var(--c-border)',
      }}
    >
      ⇥
    </kbd>
  )
}
