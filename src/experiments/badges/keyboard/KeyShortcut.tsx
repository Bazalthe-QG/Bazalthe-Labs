// Cmd+K shortcut combo
export default function KeyShortcut() {
  return (
    <div className="flex items-center gap-1">
      {['⌘', 'K'].map((k) => (
        <kbd
          key={k}
          className="px-2 py-1 rounded-md text-xs font-mono font-semibold"
          style={{
            background: 'var(--c-surface)',
            color: 'var(--c-text)',
            border: '1px solid var(--c-border)',
            borderBottom: '3px solid var(--c-border)',
          }}
        >
          {k}
        </kbd>
      ))}
    </div>
  )
}
