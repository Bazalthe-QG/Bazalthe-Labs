// Mobile bottom navigation bar
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

export default function BottomNav() {
  return (
    <Frame>
      <div className="h-full flex flex-col">
        <div className="flex-1 p-3 flex flex-col gap-2">
          <Line />
          <Line w="w-3/4" />
        </div>
        <div
          className="h-10 flex items-center justify-around px-4 border-t"
          style={{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{
                background: i === 2 ? 'var(--c-accent)' : 'transparent',
                opacity: i === 2 ? 0.3 : 0.5,
              }}
            >
              <div className="w-3 h-3 rounded-sm" style={{ background: 'var(--c-border)' }} />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}
