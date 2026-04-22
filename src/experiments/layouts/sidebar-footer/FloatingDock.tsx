// Sidebar with floating dock overlay at bottom
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

export default function FloatingDock() {
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }
  const accent = { background: 'rgba(109,40,217,0.12)', borderRadius: 4 }

  return (
    <Frame>
      <div className="h-full flex relative">
        <div className="w-14 shrink-0 p-1.5 flex flex-col gap-1" style={side}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex items-center gap-1 px-1 py-0.5 rounded"
              style={i === 3 ? accent : {}}
            >
              <div
                className="w-2.5 h-2.5 rounded-sm shrink-0"
                style={{ background: 'var(--c-border)', opacity: i === 3 ? 0.8 : 0.3 }}
              />
              <Line w="w-full" opacity={i === 3 ? 0.6 : 0.25} />
            </div>
          ))}
        </div>
        <div className="flex-1 p-2 flex flex-col gap-2">
          <Line w="w-3/4" />
          <Line />
          <Line w="w-1/2" />
        </div>
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full shadow-lg"
          style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-lg"
              style={{
                background: i === 2 ? 'var(--c-accent)' : 'var(--c-border)',
                opacity: i === 2 ? 1 : 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </Frame>
  )
}
