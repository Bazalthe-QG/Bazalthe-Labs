// 3D card shadow
export default function Card3d() {
  return (
    <div
      className="w-20 h-20 rounded-xl flex items-center justify-center"
      style={{
        background: 'var(--c-surface)',
        boxShadow: '5px 5px 0 rgba(109,40,217,0.3), 10px 10px 0 rgba(109,40,217,0.15)',
      }}
    >
      <div className="w-6 h-6 rounded-md" style={{ background: 'var(--c-border)' }} />
    </div>
  )
}
