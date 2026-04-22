// Mini icon sidebar with tooltip on active item
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

export default function MiniTooltip() {
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }

  return (
    <Frame>
      <div className="h-full flex">
        <div className="w-9 shrink-0 p-1 flex flex-col items-center gap-2 pt-3" style={side}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-md flex items-center justify-center relative"
              style={
                i === 2 ? { background: 'var(--c-accent)', borderRadius: 6 } : { opacity: 0.4 }
              }
            >
              <div
                className="w-3 h-3 rounded-sm"
                style={{ background: i === 2 ? 'rgba(255,255,255,0.8)' : 'var(--c-border)' }}
              />
              {i === 2 && (
                <div
                  className="absolute left-full ml-2 px-1.5 py-0.5 rounded text-[7px] whitespace-nowrap z-10"
                  style={{
                    background: 'var(--c-surface)',
                    border: '1px solid var(--c-border)',
                    color: 'var(--c-text)',
                  }}
                >
                  Dashboard
                </div>
              )}
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
