// Dark/light split screen layout
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

export default function SplitScreen() {
  return (
    <Frame>
      <div className="h-full flex">
        <div
          className="flex-1 flex flex-col items-center justify-center gap-2 p-4"
          style={{ background: '#1A1714' }}
        >
          <div className="w-7 h-7 rounded-lg" style={{ background: 'rgba(109,40,217,.6)' }} />
          <Line w="w-14" style={{ background: 'rgba(255,255,255,.15)' }} />
          <Line w="w-10" style={{ background: 'rgba(255,255,255,.1)' }} />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 p-4">
          <Line />
          <Line w="w-3/4" />
          <Line w="w-1/2" />
          <div
            className="h-4 w-14 rounded-md mt-1"
            style={{ background: 'var(--c-accent)', opacity: 0.3 }}
          />
        </div>
      </div>
    </Frame>
  )
}
