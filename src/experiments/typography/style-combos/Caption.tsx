// Image caption pair
export default function Caption() {
  return (
    <div className="space-y-0.5">
      <p className="text-sm font-medium" style={{ color: 'var(--c-text)' }}>
        Image title
      </p>
      <p className="text-[10px] font-normal" style={{ color: 'var(--c-muted)' }}>
        Photo by Léa Moreau
      </p>
    </div>
  )
}
