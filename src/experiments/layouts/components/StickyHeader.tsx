// Fixed header with scrollable content
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

export default function StickyHeader() {
  return (
    <Frame>
      <div className="h-full flex flex-col overflow-hidden">
        <div
          className="h-8 shrink-0 flex items-center px-3 gap-2 shadow-sm"
          style={{ background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)' }}
        >
          <Line w="w-10" />
          <Line w="w-8" />
          <div className="ml-auto">
            <Line w="w-12" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Line key={i} w={i % 3 === 0 ? 'w-full' : i % 3 === 1 ? 'w-3/4' : 'w-1/2'} />
          ))}
        </div>
      </div>
    </Frame>
  )
}
