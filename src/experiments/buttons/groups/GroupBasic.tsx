// Basic button group
export default function GroupBasic() {
  return (
    <div
      className="inline-flex rounded-xl overflow-hidden border"
      style={{ borderColor: 'var(--c-border)' }}
    >
      {['Left', 'Center', 'Right'].map((l) => (
        <button
          key={l}
          className="px-4 py-1.5 text-sm font-medium border-r last:border-r-0 transition hover:bg-violet-50"
          style={{ color: 'var(--c-text)', borderColor: 'var(--c-border)' }}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
