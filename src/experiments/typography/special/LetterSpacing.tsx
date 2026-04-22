// Letter spacing demo
export default function LetterSpacing() {
  return (
    <div className="space-y-2">
      <p className="text-xs tracking-tight" style={{ color: 'var(--c-text)' }}>Tight tracking</p>
      <p className="text-xs tracking-normal" style={{ color: 'var(--c-text)' }}>Normal tracking</p>
      <p className="text-xs tracking-widest" style={{ color: 'var(--c-text)' }}>Widest tracking</p>
    </div>
  )
}
