// List skeleton loader
export default function ListSkeleton() {
  return (
    <div className="w-52 space-y-3 animate-pulse">
      {[1,2,3].map(i => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0" />
          <div className="flex-1 space-y-1.5">
            <div className="h-2.5 bg-gray-200 rounded w-3/4" />
            <div className="h-2 bg-gray-200 rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}
