// Asymmetric masonry grid layout
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-40 overflow-hidden rounded-xl" style={{ background: 'var(--c-bg)' }}>
      {children}
    </div>
  )
}

export default function Masonry() {
  return (
    <Frame>
      <div className="h-full grid grid-cols-2 gap-1.5 p-2">
        <div className="flex flex-col gap-1.5">
          <div className="h-16 rounded-lg" style={{ background: 'var(--c-border)' }} />
          <div
            className="h-10 rounded-lg"
            style={{ background: 'var(--c-border)', opacity: 0.6 }}
          />
          <div
            className="flex-1 rounded-lg"
            style={{ background: 'var(--c-border)', opacity: 0.4 }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <div
            className="h-10 rounded-lg"
            style={{ background: 'var(--c-border)', opacity: 0.7 }}
          />
          <div className="h-20 rounded-lg" style={{ background: 'var(--c-border)' }} />
          <div
            className="flex-1 rounded-lg"
            style={{ background: 'var(--c-border)', opacity: 0.5 }}
          />
        </div>
      </div>
    </Frame>
  )
}
