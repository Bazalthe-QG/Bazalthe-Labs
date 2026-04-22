// Filter sidebar with results
export default function FilterSidebarPane() {
  return (
    <div className="flex gap-0 rounded-xl overflow-hidden border" style={{ borderColor: 'var(--c-border)', width: 320 }}>
      <div className="w-40 shrink-0 p-3 flex flex-col gap-4 border-r" style={{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }}>
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold" style={{ color: 'var(--c-text)' }}>Filters</p>
          <button className="text-[10px]" style={{ color: 'var(--c-accent)' }}>Clear</button>
        </div>
        {[
          { label: 'Category', items: ['UI', 'Layout', 'Motion', 'Visual'] },
          { label: 'Status', items: ['Active', 'Draft', 'Review'] },
        ].map((group) => (
          <div key={group.label} className="flex flex-col gap-1.5">
            <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--c-muted)' }}>{group.label}</p>
            {group.items.map((item, i) => (
              <label key={item} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked={i === 0} className="accent-violet-600 w-3 h-3" />
                <span className="text-xs" style={{ color: 'var(--c-text)' }}>{item}</span>
              </label>
            ))}
          </div>
        ))}
      </div>
      <div className="flex-1 p-3 flex flex-col gap-2">
        <p className="text-[10px] font-medium" style={{ color: 'var(--c-muted)' }}>12 results</p>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-2 p-2 rounded-lg" style={{ background: 'var(--c-bg)' }}>
            <div className="w-6 h-6 rounded-md shrink-0" style={{ background: 'rgba(109,40,217,0.15)' }} />
            <div className="flex-1 flex flex-col gap-1">
              <div className="h-2 rounded-full" style={{ width: `${85 - i * 8}%`, background: 'var(--c-border)', opacity: 0.7 }} />
              <div className="h-1.5 rounded-full w-2/3" style={{ background: 'var(--c-border)', opacity: 0.4 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
