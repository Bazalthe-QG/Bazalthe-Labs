// Sidebar with pagination footer
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

export default function PaginatorLayout() {
  const side = { background: 'var(--c-sidebar)', borderRight: '1px solid var(--c-border)' }
  const footer = { background: 'var(--c-sidebar)', borderTop: '1px solid var(--c-border)' }

  return (
    <Frame>
      <div className="h-full flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          <div className="w-14 shrink-0 p-1.5 flex flex-col gap-1" style={side}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-2 rounded"
                style={{ background: 'var(--c-border)', opacity: i === 2 ? 0.7 : 0.3 }}
              />
            ))}
          </div>
          <div className="flex-1 p-2 flex flex-col gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex gap-2 p-1 rounded"
                style={{ background: 'var(--c-surface)' }}
              >
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ background: 'var(--c-border)', opacity: 0.4 }}
                />
                <Line w="w-full" opacity={0.4} />
              </div>
            ))}
          </div>
        </div>
        <div className="h-7 shrink-0 px-3 flex items-center justify-center gap-1" style={footer}>
          {['‹', '1', '2', '3', '›'].map((t, i) => (
            <div
              key={t}
              className="w-5 h-5 rounded flex items-center justify-center text-[8px] font-medium"
              style={{
                background: i === 2 ? 'var(--c-accent)' : 'transparent',
                color: i === 2 ? '#fff' : 'var(--c-muted)',
                opacity: i === 2 ? 1 : 0.6,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}
