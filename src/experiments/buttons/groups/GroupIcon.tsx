// Icon button group
export default function GroupIcon() {
  return (
    <div className="inline-flex gap-1">
      {[
        { icon: <path d="M15 18l-6-6 6-6" />, label: 'prev' },
        {
          icon: (
            <>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </>
          ),
          label: 'add',
        },
        { icon: <path d="M9 18l6-6-6-6" />, label: 'next' },
      ].map(({ icon, label }) => (
        <button
          key={label}
          className="w-9 h-9 rounded-xl border flex items-center justify-center transition hover:bg-violet-50 hover:border-violet-300"
          style={{ borderColor: 'var(--c-border)', color: 'var(--c-text)' }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {icon}
          </svg>
        </button>
      ))}
    </div>
  )
}
