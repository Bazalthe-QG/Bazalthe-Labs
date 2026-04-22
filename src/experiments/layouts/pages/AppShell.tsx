// Full application shell layout
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-40 overflow-hidden rounded-xl" style={{ background: 'var(--c-bg)' }}>
      {children}
    </div>
  )
}

const Line = ({ w = 'w-full' }: { w?: string }) => (
  <div className={`h-1.5 rounded-full ${w}`} style={{ background: 'var(--c-border)' }} />
)

export default function AppShell() {
  const nav = { background: 'var(--c-sidebar)', borderBottom: '1px solid var(--c-border)' }
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }
  return (
    <Frame>
      <div className="h-full flex flex-col">
        <div className="h-7 shrink-0 flex items-center px-3" style={nav}>
          <Line w="w-10" />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="w-12 shrink-0 p-2 flex flex-col gap-1.5" style={side}>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-4 rounded"
                style={{ background: 'var(--c-border)', opacity: i === 0 ? 1 : 0.5 }}
              />
            ))}
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex-1 p-3 flex flex-col gap-2">
              <Line />
              <Line w="w-3/4" />
            </div>
            <div className="h-9 border-t p-2" style={{ borderColor: 'var(--c-border)' }}>
              <div className="h-5 rounded-lg" style={{ background: 'var(--c-border)' }} />
            </div>
          </div>
        </div>
      </div>
    </Frame>
  )
}
