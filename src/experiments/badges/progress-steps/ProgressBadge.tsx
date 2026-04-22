// Pill badge with progress bar
export default function ProgressBadge() {
  return (
    <div className="flex items-center gap-2">
      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-100 text-violet-700">
        65%
      </span>
      <div className="w-20 h-1.5 rounded-full bg-violet-100 overflow-hidden">
        <div className="h-full rounded-full bg-violet-600" style={{ width: '65%' }} />
      </div>
    </div>
  )
}
