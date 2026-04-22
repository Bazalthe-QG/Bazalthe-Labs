// Tabbed sidebar with icon strip + content panel
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-40 overflow-hidden rounded-xl" style={{ background: 'var(--c-bg)' }}>
      {children}
    </div>
  )
}

const Line = ({ w = 'w-full', opacity = 1 }: { w?: string; opacity?: number }) => (
  <div className={`h-1.5 rounded-full ${w}`} style={{ background: 'var(--c-border)', opacity }} />
)

export default function TabbedSidebar() {
  return (
    <Frame>
      <div className="h-full flex">
        <div
          className="w-6 shrink-0 flex flex-col items-center gap-1 pt-2 border-r"
          style={{ borderColor: 'var(--c-border)', background: 'var(--c-sidebar)' }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-sm"
              style={{
                background: i === 1 ? 'var(--c-accent)' : 'var(--c-border)',
                opacity: i === 1 ? 1 : 0.3,
              }}
            />
          ))}
        </div>
        <div
          className="w-20 shrink-0 p-1.5 flex flex-col gap-1 border-r"
          style={{ borderColor: 'var(--c-border)', background: 'var(--c-sidebar)' }}
        >
          <div
            className="text-[7px] font-bold uppercase tracking-widest mb-1"
            style={{ color: 'var(--c-muted)', opacity: 0.5 }}
          >
            Files
          </div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-1.5 rounded-full"
              style={{
                width: `${90 - i * 8}%`,
                background: 'var(--c-border)',
                opacity: 0.4,
              }}
            />
          ))}
        </div>
        <div className="flex-1 p-2 flex flex-col gap-2">
          <Line w="w-3/4" />
          <Line />
          <Line w="w-2/3" />
        </div>
      </div>
    </Frame>
  )
}
