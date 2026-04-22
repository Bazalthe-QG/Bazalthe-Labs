// Emoji menu UI context
export default function EmojiMenu() {
  return (
    <div className="space-y-1 w-28">
      {[
        ['✏️', 'Edit'],
        ['📋', 'Copy'],
        ['🗑️', 'Delete'],
      ].map(([e, l]) => (
        <button
          key={l}
          className="flex items-center gap-2 px-2 py-1 rounded-lg text-xs w-full text-left hover:bg-violet-50 transition"
          style={{ color: 'var(--c-text)' }}
        >
          <span>{e}</span>
          {l}
        </button>
      ))}
    </div>
  )
}
