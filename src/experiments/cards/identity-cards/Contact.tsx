// Contact action card
// Contact card with actions
export default function Contact() {
  return (
    <div className="w-full space-y-2.5 p-1">
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shrink-0" />
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>
            Sara El-Amin
          </p>
          <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
            sara@company.io
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 py-1.5 rounded-lg text-xs font-medium bg-violet-600 text-white">
          Message
        </button>
        <button
          className="flex-1 py-1.5 rounded-lg text-xs font-medium border"
          style={{ borderColor: 'var(--c-border)', color: 'var(--c-text)' }}
        >
          Follow
        </button>
      </div>
    </div>
  )
}
