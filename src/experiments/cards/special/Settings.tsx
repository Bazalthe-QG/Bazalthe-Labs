// Settings toggle list
export default function Settings() {
  return (
    // Settings toggles
    <div className="w-full space-y-2 p-1">
      {[
        { label: 'Email notifications', on: true },
        { label: 'Dark mode', on: false },
        { label: 'Auto-save', on: true },
      ].map(({ label, on }) => (
        <div key={label} className="flex items-center justify-between">
          <span className="text-xs" style={{ color: 'var(--c-text)' }}>
            {label}
          </span>
          <div
            className="w-8 h-4 rounded-full relative transition"
            style={{ background: on ? 'var(--c-accent)' : 'var(--c-border)' }}
          >
            <div
              className="w-3 h-3 rounded-full bg-white absolute top-0.5 transition-all"
              style={{ left: on ? '17px' : '2px' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
