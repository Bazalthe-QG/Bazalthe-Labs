// Details pane on the right side
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

export default function DetailsPane() {
  const sideRight = { background: 'var(--c-sidebar)', borderLeft: '1px solid var(--c-border)' }

  return (
    <Frame>
      <div className="h-full flex">
        <div className="flex-1 p-3 flex flex-col gap-2">
          <Line w="w-3/4" />
          <Line />
          <Line w="w-1/2" />
          <Line w="w-2/3" />
        </div>
        <div className="w-16 shrink-0 p-2 flex flex-col gap-2" style={sideRight}>
          <div className="h-8 rounded" style={{ background: 'rgba(109,40,217,0.1)' }} />
          <Line w="w-full" opacity={0.6} />
          <Line w="w-3/4" opacity={0.4} />
          <Line w="w-1/2" opacity={0.3} />
        </div>
      </div>
    </Frame>
  )
}
