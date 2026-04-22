// Busy status dot
export default function DotBusy() {
  return (
    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
      Busy
    </span>
  )
}
