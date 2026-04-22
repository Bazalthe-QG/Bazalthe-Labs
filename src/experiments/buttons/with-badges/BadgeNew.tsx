// New feature badge
export default function BadgeNew() {
  return (
    <button
      className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-medium border transition hover:bg-violet-50"
      style={{ color: 'var(--c-text)', borderColor: 'var(--c-border)' }}
    >
      Features
      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
        NEW
      </span>
    </button>
  )
}
