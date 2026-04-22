// Centered modal dialog overlay
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

export default function ModalOverlay() {
  return (
    <Frame>
      <div className="h-full relative">
        <div
          className="absolute inset-0 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.35)' }}
        >
          <div
            className="w-full rounded-2xl p-4 flex flex-col gap-2 shadow-2xl"
            style={{ background: 'var(--c-surface)' }}
          >
            <Line w="w-1/2" />
            <Line w="w-full" />
            <Line w="w-3/4" />
            <div className="flex gap-2 mt-1">
              <div className="flex-1 h-5 rounded-lg" style={{ background: 'var(--c-border)' }} />
              <div
                className="flex-1 h-5 rounded-lg"
                style={{ background: 'var(--c-accent)', opacity: 0.4 }}
              />
            </div>
          </div>
        </div>
      </div>
    </Frame>
  )
}
