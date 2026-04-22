// Invoice line items
export default function Invoice() {
  return (
    // Invoice card
    <div className="w-full space-y-2 p-1">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
            Invoice #1042
          </p>
          <p className="text-sm font-bold mt-0.5" style={{ color: 'var(--c-text)' }}>
            $3,200.00
          </p>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-700">
          Due
        </span>
      </div>
      {[
        ['Design work', '$2,400'],
        ['Consultation', '$800'],
      ].map(([item, price]) => (
        <div
          key={item}
          className="flex justify-between text-xs border-t pt-1.5"
          style={{ borderColor: 'var(--c-border)', color: 'var(--c-muted)' }}
        >
          <span>{item}</span>
          <span>{price}</span>
        </div>
      ))}
    </div>
  )
}
