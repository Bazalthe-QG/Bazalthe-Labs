// Overlay panel floating over content
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

export default function OverlayPanel() {
  return (
    <Frame>
      <div className="h-full flex relative">
        <div className="flex-1 p-3 flex flex-col gap-2">
          <Line w="w-3/4" />
          <Line />
          <Line w="w-1/2" />
        </div>
        <div
          className="absolute inset-0 left-auto w-24 shadow-xl"
          style={{ background: 'var(--c-sidebar)', borderLeft: '1px solid var(--c-border)' }}
        >
          <div
            className="p-2 border-b flex items-center justify-between"
            style={{ borderColor: 'var(--c-border)' }}
          >
            <Line w="w-12" opacity={0.7} />
            <div className="w-3 h-3 rounded" style={{ background: 'var(--c-border)' }} />
          </div>
          <div className="p-2 flex flex-col gap-2">
            <Line w="w-full" opacity={0.5} />
            <Line w="w-3/4" opacity={0.4} />
            <Line w="w-1/2" opacity={0.3} />
          </div>
        </div>
      </div>
    </Frame>
  )
}
