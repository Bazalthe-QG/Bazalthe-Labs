// Card skeleton loader
export default function CardSkeleton() {
  return (
    <div className="w-52 rounded-xl border border-gray-100 p-4 animate-pulse">
      <div className="h-24 bg-gray-200 rounded-lg mb-3" />
      <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
    </div>
  )
}
