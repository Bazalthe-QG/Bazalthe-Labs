// Hover lift card
export default function CardLift() {
  return (
    <div
      className="w-full p-3 rounded-xl transition cursor-pointer hover:translate-y-[-2px]"
      style={{
        background: 'var(--c-surface)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        transition: 'box-shadow .2s, transform .2s',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
      }}
    >
      <div className="h-2.5 rounded mb-2" style={{ background: 'var(--c-border)' }} />
      <div className="h-2 w-3/4 rounded" style={{ background: 'var(--c-border)' }} />
    </div>
  )
}
