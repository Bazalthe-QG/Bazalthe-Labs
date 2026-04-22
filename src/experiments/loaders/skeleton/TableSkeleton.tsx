// Table skeleton loader
export default function TableSkeleton() {
  return (
    <div className="w-52 animate-pulse">
      <div className="flex gap-2 mb-2">
        <div className="h-3 bg-gray-300 rounded flex-1" />
        <div className="h-3 bg-gray-300 rounded flex-1" />
        <div className="h-3 bg-gray-300 rounded flex-1" />
      </div>
      {[1,2,3].map(i => (
        <div key={i} className="flex gap-2 mb-1.5">
          <div className="h-2.5 bg-gray-200 rounded flex-1" />
          <div className="h-2.5 bg-gray-200 rounded flex-1" />
          <div className="h-2.5 bg-gray-200 rounded flex-1" />
        </div>
      ))}
    </div>
  )
}
