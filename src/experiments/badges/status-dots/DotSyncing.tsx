// Syncing status dot
export default function DotSyncing() {
  return (
    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
      Syncing
    </span>
  )
}
