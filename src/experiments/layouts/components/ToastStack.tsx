// Stacked notification toasts
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

export default function ToastStack() {
  return (
    <Frame>
      <div className="h-full relative p-2">
        <div className="flex-1 p-2 flex flex-col gap-2 opacity-30">
          <Line />
          <Line w="w-3/4" />
        </div>
        <div className="absolute bottom-3 right-3 flex flex-col gap-1.5 w-36">
          {[
            ['bg-emerald-500', 'Saved'],
            ['bg-violet-600', 'Link copied'],
            ['bg-red-500', 'Error'],
          ].map(([bg, txt], i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg shadow-md"
              style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
            >
              <div className={`w-2 h-2 rounded-full ${bg}`} />
              <span className="text-[9px] font-medium" style={{ color: 'var(--c-text)' }}>
                {txt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}
