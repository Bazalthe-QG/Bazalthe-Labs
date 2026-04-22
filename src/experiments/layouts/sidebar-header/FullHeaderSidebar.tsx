// Full top navigation bar with left sidebar
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

export default function FullHeaderSidebar() {
  const nav = { background: 'var(--c-sidebar)', borderBottom: '1px solid var(--c-border)' }
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }
  const accent = { background: 'rgba(109,40,217,0.12)', borderRadius: 4 }

  return (
    <Frame>
      <div className="h-full flex flex-col">
        <div className="h-7 shrink-0 px-3 flex items-center gap-3" style={nav}>
          <div className="w-4 h-4 rounded" style={{ background: 'rgba(109,40,217,0.3)' }} />
          <Line w="w-12" opacity={0.5} />
          <div className="ml-auto flex gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: 'var(--c-border)' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: 'var(--c-border)' }} />
          </div>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="w-14 shrink-0 p-1.5 flex flex-col gap-1" style={side}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center gap-1 px-1 py-0.5 rounded"
                style={i === 1 ? accent : {}}
              >
                <div
                  className="w-2.5 h-2.5 rounded-sm shrink-0"
                  style={{ background: 'var(--c-border)', opacity: i === 1 ? 0.8 : 0.3 }}
                />
                <Line w="w-full" opacity={i === 1 ? 0.7 : 0.3} />
              </div>
            ))}
          </div>
          <div className="flex-1 p-2 flex flex-col gap-2">
            <Line w="w-3/4" />
            <Line />
            <Line w="w-1/2" />
          </div>
        </div>
      </div>
    </Frame>
  )
}
