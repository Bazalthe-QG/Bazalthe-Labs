// Get started state
export default function EmptyStart() {
  return (
    <div className="w-full flex flex-col items-center gap-2.5 py-4">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
        <span className="text-2xl">🚀</span>
      </div>
      <p className="text-sm font-bold" style={{ color: 'var(--c-text)' }}>
        Start your first project
      </p>
      <p className="text-[10px] text-center" style={{ color: 'var(--c-muted)' }}>
        Create a project to organize your work and collaborate with your team.
      </p>
      <button
        className="mt-1 px-4 py-1.5 rounded-xl text-xs font-semibold text-white"
        style={{ background: 'var(--c-accent)' }}
      >
        New project
      </button>
    </div>
  )
}
