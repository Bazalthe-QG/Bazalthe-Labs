// Notification settings toggles
export default function Settings() {
  return (
    <div className="w-full space-y-4">
      <p className="text-sm font-bold" style={{ color: 'var(--c-text)' }}>Notifications</p>
      <div className="space-y-3">
        {[
          ['Email digest', 'Daily summary of activity'],
          ['Push alerts', 'Browser push notifications'],
          ['Weekly report', 'Stats & insights every Monday'],
        ].map(([l, d], i) => (
          <div key={l} className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium" style={{ color: 'var(--c-text)' }}>{l}</p>
              <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>{d}</p>
            </div>
            <button className="w-8 h-[18px] rounded-full relative transition-colors duration-200"
              style={{ background: i === 0 ? 'var(--c-accent)' : 'var(--c-border)' }}>
              <div className="w-3 h-3 rounded-full bg-white absolute top-[3px] transition-all duration-200"
                style={{ left: i === 0 ? '17px' : '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
