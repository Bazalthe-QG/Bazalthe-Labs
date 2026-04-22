// Classic three-panel page layout
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

export default function HolyGrail() {
  const nav = { background: 'var(--c-sidebar)', borderBottom: '1px solid var(--c-border)' }
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }
  return (
    <Frame>
      <div className="h-full flex flex-col">
        <div className="h-7 shrink-0 flex items-center px-3 gap-2" style={nav}>
          <Line w="w-12" />
          <Line w="w-8" />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="w-10 shrink-0" style={side} />
          <div className="flex-1 p-3 flex flex-col gap-2">
            <Line />
            <Line w="w-3/4" />
            <Line w="w-1/2" />
          </div>
          <div className="w-8 shrink-0" style={side} />
        </div>
        <div
          className="h-5 shrink-0"
          style={{ background: 'var(--c-sidebar)', borderTop: '1px solid var(--c-border)' }}
        />
      </div>
    </Frame>
  )
}
