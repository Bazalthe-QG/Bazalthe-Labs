// Sidebar with nested navigation levels
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

export default function NestedNav() {
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }
  const accent = { background: 'rgba(109,40,217,0.18)' }
  const items = [
    { indent: 0, active: false },
    { indent: 0, active: false },
    { indent: 0, active: true },
    { indent: 4, active: true },
    { indent: 4, active: false },
    { indent: 4, active: false },
  ]

  return (
    <Frame>
      <div className="h-full flex">
        <div className="w-20 shrink-0 p-2 flex flex-col gap-1" style={side}>
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-1 py-0.5 rounded px-1"
              style={item.active && item.indent === 4 ? accent : {}}
            >
              <div style={{ width: item.indent }} />
              <div
                className="w-2 h-2 rounded-sm shrink-0"
                style={{ background: 'var(--c-border)', opacity: item.active ? 0.8 : 0.4 }}
              />
              <Line w="w-full" opacity={item.active ? 0.7 : 0.3} />
            </div>
          ))}
        </div>
        <div className="flex-1 p-3 flex flex-col gap-2">
          <Line w="w-3/4" />
          <Line />
          <Line w="w-1/2" />
        </div>
      </div>
    </Frame>
  )
}
