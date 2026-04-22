// Inline select filter bar
export default function InlineFilterBar() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs font-medium" style={{ color: 'var(--c-muted)' }}>Filter:</span>
      {[
        { label: 'Type', options: ['All', 'Button', 'Card', 'Form'] },
        { label: 'Color', options: ['Any', 'Violet', 'Blue', 'Green'] },
        { label: 'Size', options: ['Any', 'SM', 'MD', 'LG'] },
      ].map(({ label, options }) => (
        <select key={label} className="h-7 px-2 rounded-lg border text-xs outline-none"
          style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }}>
          <option value="">{label}</option>
          {options.slice(1).map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ))}
    </div>
  )
}
