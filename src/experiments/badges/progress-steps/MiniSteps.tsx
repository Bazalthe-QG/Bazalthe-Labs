// Small step progress dots
export default function MiniSteps() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`h-1.5 w-4 rounded-full ${i <= 3 ? 'bg-emerald-500' : 'bg-stone-200'}`}
        />
      ))}
    </div>
  )
}
