// Chat / conversation panel on the right
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

export default function ChatSidebar() {
  const sideRight = { background: 'var(--c-sidebar)', borderLeft: '1px solid var(--c-border)' }

  return (
    <Frame>
      <div className="h-full flex">
        <div className="flex-1 p-2 flex flex-col gap-1.5">
          <Line w="w-3/4" />
          <Line />
          <Line w="w-1/2" />
        </div>
        <div className="w-20 shrink-0 p-2 flex flex-col gap-2" style={sideRight}>
          <div
            className="text-[7px] uppercase tracking-widest font-bold mb-1"
            style={{ color: 'var(--c-muted)', opacity: 0.5 }}
          >
            Chat
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-1 items-start">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ background: 'var(--c-border)' }}
              />
              <div className="flex-1 flex flex-col gap-0.5">
                <div
                  className="h-1 rounded"
                  style={{ background: 'var(--c-border)', width: i === 2 ? '60%' : '85%' }}
                />
                <div
                  className="h-1 rounded w-1/2"
                  style={{ background: 'var(--c-border)', opacity: 0.5 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}
