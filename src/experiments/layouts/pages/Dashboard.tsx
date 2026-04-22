// Dashboard with grid cards
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-40 overflow-hidden rounded-xl" style={{ background: 'var(--c-bg)' }}>
      {children}
    </div>
  )
}

export default function Dashboard() {
  const nav = { background: 'var(--c-sidebar)', borderBottom: '1px solid var(--c-border)' }
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }
  return (
    <Frame>
      <div className="h-full flex flex-col">
        <div className="h-7 shrink-0" style={nav} />
        <div className="flex flex-1">
          <div className="w-10 shrink-0" style={side} />
          <div className="flex-1 p-2 grid grid-cols-2 grid-rows-2 gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg"
                style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}
