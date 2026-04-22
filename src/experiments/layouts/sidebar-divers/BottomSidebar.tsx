// Bottom panel / toolbar sidebar
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

export default function BottomSidebar() {
  return (
    <Frame>
      <div className="h-full flex flex-col">
        <div className="flex-1 p-3 flex flex-col gap-2">
          <Line w="w-3/4" />
          <Line />
          <Line w="w-1/2" />
        </div>
        <div
          className="shrink-0 h-20 flex flex-col border-t"
          style={{ borderColor: 'var(--c-border)', background: 'var(--c-sidebar)' }}
        >
          <div className="flex border-b" style={{ borderColor: 'var(--c-border)' }}>
            {['Tab 1', 'Tab 2', 'Tab 3'].map((t, i) => (
              <div
                key={t}
                className="px-2 py-1 text-[7px] border-b-2"
                style={{
                  borderColor: i === 0 ? 'var(--c-accent)' : 'transparent',
                  color: i === 0 ? 'var(--c-accent)' : 'var(--c-muted)',
                  opacity: i === 0 ? 1 : 0.4,
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div className="flex-1 p-2 flex items-center gap-2">
            <Line w="w-1/2" opacity={0.4} />
            <Line w="w-1/3" opacity={0.3} />
          </div>
        </div>
      </div>
    </Frame>
  )
}
