// Standard left sidebar layout
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

const Dot = () => (
  <div className="w-3 h-3 rounded-sm shrink-0" style={{ background: 'var(--c-border)' }} />
)

export default function StandardSidebar() {
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }
  const accent = { background: 'rgba(109,40,217,0.18)' }

  return (
    <Frame>
      <div className="h-full flex">
        <div className="w-16 shrink-0 p-2 flex flex-col gap-1.5" style={side}>
          <div className="h-5 rounded mb-2" style={{ background: 'rgba(109,40,217,0.2)' }} />
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 px-1 py-1 rounded"
              style={i === 1 ? accent : {}}
            >
              <Dot />
              <Line w="w-full" opacity={i === 1 ? 0.8 : 0.4} />
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
