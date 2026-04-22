// Mini icon sidebar with expanded overlay panel
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

export default function MiniOverlay() {
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }

  return (
    <Frame>
      <div className="h-full flex relative">
        <div className="w-8 shrink-0 p-1 flex flex-col items-center gap-1.5 pt-2 z-10" style={side}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-md"
              style={{
                background: i === 2 ? 'var(--c-accent)' : 'var(--c-border)',
                opacity: i === 2 ? 1 : 0.3,
              }}
            />
          ))}
        </div>
        <div
          className="absolute left-8 top-0 bottom-0 w-20 shadow-xl z-20"
          style={{ background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }}
        >
          <div
            className="p-2 border-b text-[7px] font-bold uppercase tracking-widest"
            style={{ borderColor: 'var(--c-border)', color: 'var(--c-muted)', opacity: 0.6 }}
          >
            Section
          </div>
          <div className="p-1.5 flex flex-col gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-2 rounded"
                style={{
                  background: 'var(--c-border)',
                  opacity: i === 1 ? 0.7 : 0.35,
                  width: `${95 - i * 10}%`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 ml-24 p-2 flex flex-col gap-2">
          <Line w="w-3/4" />
          <Line />
          <Line w="w-1/2" />
        </div>
      </div>
    </Frame>
  )
}
