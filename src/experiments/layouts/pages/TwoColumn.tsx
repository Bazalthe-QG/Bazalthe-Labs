// Two panel split layout
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

export default function TwoColumn() {
  return (
    <Frame>
      <div className="h-full flex">
        <div
          className="w-2/5 p-3 flex flex-col gap-2 border-r"
          style={{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }}
        >
          <Line />
          <Line w="w-4/5" />
          <Line w="w-3/5" />
        </div>
        <div className="flex-1 p-3 flex flex-col gap-2">
          <Line />
          <Line w="w-3/4" />
          <Line w="w-1/2" />
          <Line />
          <Line w="w-5/6" />
        </div>
      </div>
    </Frame>
  )
}
