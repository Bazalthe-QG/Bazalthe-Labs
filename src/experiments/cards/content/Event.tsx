// Calendar event card
// Event card with RSVP
export default function Event() {
  return (
    <div className="w-full p-1 space-y-2.5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-violet-600 flex flex-col items-center justify-center text-white shrink-0">
          <span className="text-[8px] font-bold uppercase">Apr</span>
          <span className="text-base font-bold leading-none">24</span>
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>
            Design Summit
          </p>
          <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
            Paris · 10:00 AM
          </p>
        </div>
      </div>
      <button className="w-full py-1.5 rounded-lg text-xs font-medium bg-violet-600 text-white">
        RSVP
      </button>
    </div>
  )
}
