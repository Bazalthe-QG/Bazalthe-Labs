// Social media post card
export default function SocialPost() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-violet-500" />
        <div>
          <p className="text-sm font-semibold text-gray-900">Sarah Chen</p>
          <p className="text-[10px] text-gray-400">2h ago</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-3">Just shipped the new design system! 🚀</p>
      <div className="flex gap-4 text-xs text-gray-400">
        <span className="cursor-pointer hover:text-red-400">♥ 42</span>
        <span className="cursor-pointer hover:text-blue-400">💬 12</span>
        <span className="cursor-pointer hover:text-green-400">↗ Share</span>
      </div>
    </div>
  )
}
