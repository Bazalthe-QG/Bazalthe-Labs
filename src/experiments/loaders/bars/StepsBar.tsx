// Steps progress bar
export default function StepsBar() {
  return (
    <div className="flex items-center gap-1 w-40">
      {[1,2,3,4].map(s => (
        <div key={s} className={`h-1.5 flex-1 rounded-full ${s <= 2 ? 'bg-violet-500' : 'bg-gray-200'}`} />
      ))}
    </div>
  )
}
