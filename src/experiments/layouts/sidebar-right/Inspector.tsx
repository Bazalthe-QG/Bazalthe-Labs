// Inspector / properties panel on the right
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

export default function Inspector() {
  const sideRight = { background: 'var(--c-sidebar)', borderLeft: '1px solid var(--c-border)' }

  return (
    <Frame>
      <div className="h-full flex">
        <div className="flex-1 p-3 flex flex-col gap-2">
          <Line w="w-2/3" />
          <Line />
          <Line w="w-1/2" />
        </div>
        <div className="w-20 shrink-0 p-2 flex flex-col gap-1.5" style={sideRight}>
          <div
            className="text-[7px] font-bold uppercase tracking-widest mb-1"
            style={{ color: 'var(--c-muted)', opacity: 0.6 }}
          >
            Properties
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between gap-1">
              <Line w="w-1/2" opacity={0.4} />
              <div
                className="h-3 w-8 rounded"
                style={{ background: 'var(--c-border)', opacity: 0.6 }}
              />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}
