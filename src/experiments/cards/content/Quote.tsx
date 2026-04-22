// Blockquote style card
// Quote card with attribution
export default function Quote() {
  return (
    <div
      className="w-full p-4 rounded-xl border-l-4 border-violet-500"
      style={{ background: 'var(--c-bg)' }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className="mb-2 opacity-30"
        style={{ color: 'var(--c-accent)' }}
      >
        <path
          d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
          fill="currentColor"
        />
      </svg>
      <p className="text-sm italic leading-relaxed" style={{ color: 'var(--c-text)' }}>
        "Design is not just what it looks like. Design is how it works."
      </p>
      <p className="text-[10px] mt-2 font-semibold" style={{ color: 'var(--c-muted)' }}>
        — Steve Jobs
      </p>
    </div>
  )
}
