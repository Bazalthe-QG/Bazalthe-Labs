// Team member row
// Team member with role badge
export default function TeamMember() {
  return (
    <div
      className="w-full flex items-center gap-3 p-3 rounded-xl border"
      style={{ borderColor: 'var(--c-border)' }}
    >
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate" style={{ color: 'var(--c-text)' }}>
          Thomas Brun
        </p>
        <p className="text-[11px]" style={{ color: 'var(--c-muted)' }}>
          Engineering
        </p>
      </div>
      <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-violet-100 text-violet-700">
        Admin
      </span>
    </div>
  )
}
