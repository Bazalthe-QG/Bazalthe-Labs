// Comment thread card
export default function Comment() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs font-bold shrink-0">JD</div>
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-gray-900">John Doe</span>
            <span className="text-[10px] text-gray-400">5 min ago</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Looks great! I love the attention to detail on the micro-interactions.</p>
          <div className="flex gap-3 mt-2 text-xs text-gray-400">
            <span className="cursor-pointer hover:text-violet-500">Reply</span>
            <span className="cursor-pointer hover:text-violet-500">♥ Like</span>
          </div>
        </div>
      </div>
    </div>
  )
}
