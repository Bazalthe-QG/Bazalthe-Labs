// Popover sidebar triggered by button
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

export default function PopoverSidebar() {
  return (
    <Frame>
      <div className="h-full relative p-3 flex flex-col gap-2">
        <Line w="w-3/4" />
        <Line />
        <Line w="w-1/2" />
        <div
          className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: 'var(--c-accent)' }}
        >
          <div className="w-3 h-3 rounded-sm" style={{ background: 'rgba(255,255,255,0.8)' }} />
        </div>
        <div
          className="absolute top-12 right-3 w-24 rounded-xl shadow-xl p-2 flex flex-col gap-1"
          style={{ background: 'var(--c-sidebar)', border: '1px solid var(--c-border)' }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-1 py-0.5">
              <div
                className="w-2 h-2 rounded-sm shrink-0"
                style={{ background: 'var(--c-border)', opacity: 0.5 }}
              />
              <Line w="w-full" opacity={0.4} />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}
