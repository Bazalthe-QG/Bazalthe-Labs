// Side navigation page layout
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

export default function SidebarLayout() {
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }
  return (
    <Frame>
      <div className="h-full flex">
        <div className="w-12 shrink-0 py-3 flex flex-col gap-2 px-2" style={side}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-5 rounded"
              style={{
                background: i === 2 ? 'var(--c-accent)' : 'var(--c-border)',
                opacity: i === 2 ? 0.3 : 1,
              }}
            />
          ))}
        </div>
        <div className="flex-1 p-4 flex flex-col gap-2">
          <Line />
          <Line w="w-3/4" />
          <Line w="w-1/2" />
        </div>
      </div>
    </Frame>
  )
}
