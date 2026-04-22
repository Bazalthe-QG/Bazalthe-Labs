// Gradient hero with content grid
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-40 overflow-hidden rounded-xl" style={{ background: 'var(--c-bg)' }}>
      {children}
    </div>
  )
}

const Line = ({ w = 'w-full', style }: { w?: string; style?: React.CSSProperties }) => (
  <div className={`h-1.5 rounded-full ${w}`} style={{ background: 'var(--c-border)', ...style }} />
)

export default function HeroSection() {
  return (
    <Frame>
      <div className="h-full flex flex-col">
        <div
          className="h-20 flex flex-col items-center justify-center gap-2 px-4"
          style={{ background: 'linear-gradient(135deg,#6D28D9,#EC4899)' }}
        >
          <Line w="w-20" style={{ background: 'rgba(255,255,255,.4)' }} />
          <Line w="w-14" style={{ background: 'rgba(255,255,255,.2)' }} />
        </div>
        <div className="flex-1 p-2 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-lg"
              style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
            />
          ))}
        </div>
      </div>
    </Frame>
  )
}
