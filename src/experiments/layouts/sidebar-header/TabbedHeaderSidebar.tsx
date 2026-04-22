// Header with tabbed sidebar panel
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

const Tab = ({ active }: { active?: boolean }) => (
  <div
    className="px-2 py-1 text-[7px] font-medium rounded-t"
    style={
      active
        ? {
            background: 'var(--c-bg)',
            color: 'var(--c-accent)',
            borderBottom: '2px solid var(--c-accent)',
          }
        : { opacity: 0.4 }
    }
  >
    ——
  </div>
)

export default function TabbedHeaderSidebar() {
  const nav = { background: 'var(--c-sidebar)', borderBottom: '1px solid var(--c-border)' }
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }

  return (
    <Frame>
      <div className="h-full flex flex-col">
        <div className="h-6 shrink-0 px-3 flex items-center gap-2" style={nav}>
          <Line w="w-10" opacity={0.7} />
          <Line w="w-8" opacity={0.4} />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="w-18 shrink-0 flex flex-col" style={side}>
            <div className="flex border-b" style={{ borderColor: 'var(--c-border)' }}>
              <Tab active />
              <Tab />
              <Tab />
            </div>
            <div className="flex-1 p-1.5 flex flex-col gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-1.5 rounded-full"
                  style={{
                    width: `${90 - i * 10}%`,
                    background: 'var(--c-border)',
                    opacity: 0.5,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 p-2 flex flex-col gap-2">
            <Line w="w-3/4" />
            <Line />
            <Line w="w-2/3" />
          </div>
        </div>
      </div>
    </Frame>
  )
}
