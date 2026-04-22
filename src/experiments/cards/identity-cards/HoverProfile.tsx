// Hover reveal profile
// Profile with hover actions
export default function HoverProfile() {
  return (
    <div
      className="w-full group rounded-xl border p-3 cursor-pointer transition hover:border-violet-400 hover:shadow-md"
      style={{ borderColor: 'var(--c-border)' }}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 shrink-0 transition group-hover:scale-105" />
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>
            Marco Rossi
          </p>
          <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
            @marcorossi
          </p>
        </div>
      </div>
      <p className="text-[11px] mt-2" style={{ color: 'var(--c-muted)' }}>
        UI/UX enthusiast building beautiful products.
      </p>
      <div className="flex gap-2 mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="flex-1 py-1 rounded-lg text-[10px] font-semibold bg-violet-600 text-white">
          Follow
        </button>
        <button
          className="flex-1 py-1 rounded-lg text-[10px] font-medium border"
          style={{ borderColor: 'var(--c-border)', color: 'var(--c-muted)' }}
        >
          Message
        </button>
      </div>
    </div>
  )
}
