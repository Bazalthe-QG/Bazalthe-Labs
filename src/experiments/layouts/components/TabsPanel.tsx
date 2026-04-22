// Tabbed content panel
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

export default function TabsPanel() {
  return (
    <Frame>
      <div className="h-full flex flex-col">
        <div
          className="flex border-b px-2 gap-1 pt-2"
          style={{ borderColor: 'var(--c-border)', background: 'var(--c-surface)' }}
        >
          {['Overview', 'Settings', 'Members'].map((t, i) => (
            <div
              key={t}
              className="px-3 py-1.5 text-[9px] font-semibold rounded-t-md"
              style={{
                background: i === 0 ? 'var(--c-bg)' : 'transparent',
                borderBottom: i === 0 ? '2px solid var(--c-accent)' : '2px solid transparent',
                color: i === 0 ? 'var(--c-accent)' : 'var(--c-muted)',
              }}
            >
              {t}
            </div>
          ))}
        </div>
        <div className="flex-1 p-3 flex flex-col gap-2">
          <Line />
          <Line w="w-3/4" />
          <Line w="w-1/2" />
        </div>
      </div>
    </Frame>
  )
}
