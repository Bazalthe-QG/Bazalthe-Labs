// Full layout: header + sidebar + footer combined
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

export default function FullLayout() {
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }
  const footer = { background: 'var(--c-sidebar)', borderTop: '1px solid var(--c-border)' }

  return (
    <Frame>
      <div className="h-full flex flex-col">
        <div
          className="h-6 shrink-0 px-3 flex items-center gap-2"
          style={{ background: 'var(--c-sidebar)', borderBottom: '1px solid var(--c-border)' }}
        >
          <Line w="w-10" opacity={0.6} />
          <Line w="w-8" opacity={0.4} />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="w-12 shrink-0 p-1.5 flex flex-col gap-1" style={side}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-1.5 rounded"
                style={{ background: 'var(--c-border)', opacity: i === 1 ? 0.7 : 0.3 }}
              />
            ))}
          </div>
          <div className="flex-1 p-2 flex flex-col gap-2">
            <Line w="w-3/4" />
            <Line />
            <Line w="w-1/2" />
          </div>
        </div>
        <div className="h-6 shrink-0 px-3 flex items-center gap-2" style={footer}>
          <Line w="w-12" opacity={0.4} />
          <div className="ml-auto flex gap-1">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-3 w-8 rounded"
                style={{ background: 'var(--c-border)', opacity: 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}
