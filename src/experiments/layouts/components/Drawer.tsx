// Side drawer panel overlay
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

export default function Drawer() {
  return (
    <Frame>
      <div className="h-full relative flex">
        <div className="flex-1 p-3 flex flex-col gap-2 opacity-50">
          <Line />
          <Line w="w-3/4" />
        </div>
        <div
          className="w-2/5 h-full flex flex-col p-2 gap-2 shadow-2xl"
          style={{ background: 'var(--c-surface)', borderLeft: '1px solid var(--c-border)' }}
        >
          <Line w="w-3/4" />
          <Line />
          <Line w="w-2/3" />
        </div>
      </div>
    </Frame>
  )
}
