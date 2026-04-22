// Repeated card grid pattern
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

export default function CardGrid() {
  return (
    <Frame>
      <div className="h-full grid grid-cols-2 gap-2 p-3 content-start">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-xl p-2 flex flex-col gap-1"
            style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
          >
            <div className="h-8 rounded-lg" style={{ background: 'var(--c-border)' }} />
            <Line w="w-2/3" />
            <Line w="w-1/2" />
          </div>
        ))}
      </div>
    </Frame>
  )
}
