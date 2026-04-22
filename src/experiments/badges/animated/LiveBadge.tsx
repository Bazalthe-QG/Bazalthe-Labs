// Animated live broadcast badge
export default function LiveBadge() {
  return (
    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75" />
        <span className="relative rounded-full h-2 w-2 bg-red-600" />
      </span>
      LIVE
    </span>
  )
}
