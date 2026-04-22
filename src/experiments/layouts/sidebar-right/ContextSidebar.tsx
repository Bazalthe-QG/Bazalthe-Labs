// Context-sensitive right sidebar with header nav
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

const Dot = ({ size = 3 }: { size?: number }) => (
  <div
    className={`w-${size} h-${size} rounded-sm shrink-0`}
    style={{ background: 'var(--c-border)' }}
  />
)

export default function ContextSidebar() {
  const sideRight = { background: 'var(--c-sidebar)', borderLeft: '1px solid var(--c-border)' }
  const nav = { background: 'var(--c-sidebar)', borderBottom: '1px solid var(--c-border)' }
  const accent = { background: 'rgba(109,40,217,0.12)', borderRadius: 4 }

  return (
    <Frame>
      <div className="h-full flex flex-col">
        <div className="h-6 shrink-0 flex items-center px-3 gap-2" style={nav}>
          <Line w="w-12" />
          <Line w="w-8" />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 p-2 flex flex-col gap-1.5">
            <Line w="w-3/4" />
            <Line />
            <Line w="w-2/3" />
          </div>
          <div className="w-18 shrink-0 p-2 flex flex-col gap-2" style={sideRight}>
            <div className="h-4 rounded" style={{ background: 'rgba(109,40,217,0.1)' }} />
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-1 px-1 py-0.5 rounded"
                style={i === 1 ? accent : {}}
              >
                <Dot />
                <Line w="w-full" opacity={i === 1 ? 0.7 : 0.3} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}
