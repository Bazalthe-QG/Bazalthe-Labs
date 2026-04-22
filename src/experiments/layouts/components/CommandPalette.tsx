// Searchable command palette overlay
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

export default function CommandPalette() {
  return (
    <Frame>
      <div className="h-full flex items-start justify-center pt-6 px-4">
        <div
          className="w-full rounded-2xl shadow-2xl overflow-hidden"
          style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
        >
          <div
            className="flex items-center gap-2 px-3 py-2 border-b"
            style={{ borderColor: 'var(--c-border)' }}
          >
            <div className="w-3 h-3 rounded-sm" style={{ background: 'var(--c-border)' }} />
            <Line w="flex-1" style={{ height: '8px', borderRadius: '4px' }} />
            <div
              className="text-[8px] px-1 rounded"
              style={{ background: 'var(--c-border)', color: 'var(--c-muted)' }}
            >
              ⌘K
            </div>
          </div>
          <div className="p-1.5 space-y-0.5">
            {[true, false, false].map((active, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-2 py-1 rounded-md"
                style={{ background: active ? 'rgba(109,40,217,0.08)' : 'transparent' }}
              >
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{
                    background: active ? 'var(--c-accent)' : 'var(--c-border)',
                    opacity: active ? 0.4 : 1,
                  }}
                />
                <Line w="w-16" style={{ opacity: active ? 0.8 : 0.4 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}
