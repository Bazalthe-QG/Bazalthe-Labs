// Feedback submission form
export default function Feedback() {
  return (
    <div className="w-full space-y-3">
      <p className="text-sm font-bold" style={{ color: 'var(--c-text)' }}>Send feedback</p>
      <div className="flex gap-2">
        {[['🐛', 'Bug'], ['💡', 'Idea'], ['🙏', 'Other']].map(([e, l]) => (
          <button key={l} className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl border text-xs hover:border-violet-400 transition"
            style={{ borderColor: 'var(--c-border)', color: 'var(--c-muted)' }}>
            <span className="text-lg">{e}</span>
            {l}
          </button>
        ))}
      </div>
      <textarea rows={2} placeholder="Describe your feedback…" className="w-full text-sm px-3 py-2 rounded-xl border outline-none resize-none"
        style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
      <button className="w-full py-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90"
        style={{ background: 'var(--c-accent)' }}>Send</button>
    </div>
  )
}
