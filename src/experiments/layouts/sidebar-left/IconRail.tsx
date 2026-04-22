// Icon-only navigation rail
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

export default function IconRail() {
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }
  const accent = { background: 'rgba(109,40,217,0.18)' }

  return (
    <Frame>
      <div className="h-full flex">
        <div className="w-8 shrink-0 p-1 flex flex-col gap-1.5 items-center" style={side}>
          <div className="w-5 h-5 rounded mb-1" style={{ background: 'rgba(109,40,217,0.2)' }} />
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded"
              style={i === 1 ? { ...accent } : { opacity: 0.4, background: 'var(--c-border)' }}
            />
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
