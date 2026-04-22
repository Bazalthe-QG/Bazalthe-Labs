// Resizable split pane with drag handle
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

export default function ResizableSplit() {
  return (
    <Frame>
      <div className="h-full flex">
        <div className="flex-1 p-3 flex flex-col gap-2">
          <Line w="w-3/4" />
          <Line />
          <Line w="w-1/2" />
        </div>
        <div
          className="w-1 shrink-0 cursor-col-resize flex items-center justify-center"
          style={{ background: 'var(--c-border)' }}
        >
          <div className="w-0.5 h-5 rounded" style={{ background: 'var(--c-muted)' }} />
        </div>
        <div className="w-20 p-2 flex flex-col gap-2" style={{ background: 'var(--c-sidebar)' }}>
          <Line w="w-full" opacity={0.5} />
          <Line w="w-3/4" opacity={0.4} />
          <Line w="w-1/2" opacity={0.3} />
        </div>
      </div>
    </Frame>
  )
}
