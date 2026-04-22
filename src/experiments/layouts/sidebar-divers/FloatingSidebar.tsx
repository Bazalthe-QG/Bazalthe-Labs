// Floating sidebar panel detached from edge
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

export default function FloatingSidebar() {
  return (
    <Frame>
      <div className="h-full relative p-2">
        <div className="flex flex-col gap-2 p-2">
          <Line w="w-3/4" />
          <Line />
          <Line w="w-1/2" />
        </div>
        <div
          className="absolute top-4 left-4 rounded-xl p-2 flex flex-col gap-1.5 shadow-xl"
          style={{
            background: 'var(--c-sidebar)',
            border: '1px solid var(--c-border)',
            width: 56,
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-1">
              <div
                className="w-2.5 h-2.5 rounded-md"
                style={{
                  background: i === 1 ? 'var(--c-accent)' : 'var(--c-border)',
                  opacity: i === 1 ? 1 : 0.4,
                }}
              />
              <Line w="w-full" opacity={i === 1 ? 0.7 : 0.3} />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}
