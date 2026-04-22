// Profile skeleton loader
export default function ProfileSkeleton() {
  return (
    <div className="w-52 flex flex-col items-center p-4 animate-pulse">
      <div className="w-16 h-16 rounded-full bg-gray-200 mb-3" />
      <div className="h-3 bg-gray-200 rounded w-24 mb-2" />
      <div className="h-2.5 bg-gray-200 rounded w-16" />
    </div>
  )
}
