// Drawer / sheet sliding in from left
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

export default function DrawerSidebar() {
  return (
    <Frame>
      <div className="h-full relative">
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} />
        <div className="p-3 flex flex-col gap-2 opacity-50">
          <Line w="w-3/4" />
          <Line />
          <Line w="w-1/2" />
        </div>
        <div
          className="absolute top-0 left-0 bottom-0 w-28 shadow-2xl flex flex-col"
          style={{ background: 'var(--c-sidebar)' }}
        >
          <div
            className="h-7 shrink-0 px-3 flex items-center justify-between border-b"
            style={{ borderColor: 'var(--c-border)' }}
          >
            <Line w="w-12" opacity={0.6} />
            <div className="w-3 h-3 rounded" style={{ background: 'var(--c-border)' }} />
          </div>
          <div className="flex-1 p-2 flex flex-col gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center gap-1 px-1 py-0.5 rounded"
                style={i === 2 ? { background: 'rgba(109,40,217,0.12)', borderRadius: 4 } : {}}
              >
                <div
                  className="w-2 h-2 rounded-sm shrink-0"
                  style={{ background: 'var(--c-border)', opacity: i === 2 ? 0.8 : 0.3 }}
                />
                <Line w="w-full" opacity={i === 2 ? 0.7 : 0.3} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}
