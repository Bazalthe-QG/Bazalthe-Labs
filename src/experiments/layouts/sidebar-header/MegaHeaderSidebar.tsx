// Mega header spanning full width with sidebar below
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

export default function MegaHeaderSidebar() {
  const nav = { background: 'var(--c-sidebar)', borderBottom: '1px solid var(--c-border)' }
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }

  return (
    <Frame>
      <div className="h-full flex flex-col">
        <div className="h-10 shrink-0 px-3 flex flex-col justify-center gap-1" style={nav}>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ background: 'rgba(109,40,217,0.4)' }} />
            <Line w="w-20" opacity={0.7} />
            <div className="ml-auto h-4 w-10 rounded" style={{ background: 'var(--c-border)' }} />
          </div>
          <div className="flex gap-2 items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-1 rounded-full"
                style={{ width: 16, background: 'var(--c-border)', opacity: 0.4 }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="w-12 shrink-0 p-1 flex flex-col gap-1" style={side}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-2.5 rounded"
                style={{ background: 'var(--c-border)', opacity: i === 2 ? 0.7 : 0.3 }}
              />
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
