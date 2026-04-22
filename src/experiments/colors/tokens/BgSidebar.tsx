// Sidebar background token

// Navigation background color
export default function BgSidebar() {
  return (
    <div className="w-full space-y-2">
      <div
        className="h-10 rounded-xl border"
        style={{ background: 'var(--c-sidebar)', borderColor: 'var(--c-border)' }}
      />
      <div>
        <p className="text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>
          --c-sidebar
        </p>
        <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
          Navigation bg
        </p>
      </div>
    </div>
  )
}
