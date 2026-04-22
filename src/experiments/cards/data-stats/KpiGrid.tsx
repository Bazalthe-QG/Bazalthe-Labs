// KPI metrics grid
export default function KpiGrid() {
  return (
    // KPI grid
    <div className="w-full grid grid-cols-2 gap-2 p-1">
      {[
        { label: 'Users', value: '12.4k', delta: '+8%', up: true },
        { label: 'Bounce', value: '34%', delta: '-3%', up: true },
        { label: 'Orders', value: '2,891', delta: '+14%', up: true },
        { label: 'Churn', value: '2.1%', delta: '+0.3%', up: false },
      ].map(({ label, value, delta, up }) => (
        <div
          key={label}
          className="p-2.5 rounded-xl border"
          style={{ borderColor: 'var(--c-border)' }}
        >
          <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
            {label}
          </p>
          <p className="text-base font-bold mt-0.5" style={{ color: 'var(--c-text)' }}>
            {value}
          </p>
          <span className={`text-[9px] font-semibold ${up ? 'text-emerald-600' : 'text-red-500'}`}>
            {delta}
          </span>
        </div>
      ))}
    </div>
  )
}
