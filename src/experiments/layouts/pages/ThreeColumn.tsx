// Three equal columns layout
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

export default function ThreeColumn() {
  return (
    <Frame>
      <div
        className="h-full grid grid-cols-3"
        style={{ borderColor: 'var(--c-border)', gap: '1px', background: 'var(--c-border)' }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className="p-2 flex flex-col gap-1.5" style={{ background: 'var(--c-bg)' }}>
            <div className="h-12 rounded-lg mb-1" style={{ background: 'var(--c-border)' }} />
            <Line />
            <Line w="w-3/4" />
          </div>
        ))}
      </div>
    </Frame>
  )
}
