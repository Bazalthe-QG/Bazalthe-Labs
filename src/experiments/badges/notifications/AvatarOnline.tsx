// Avatar with online status dot
export default function AvatarOnline() {
  return (
    <div className="relative inline-flex">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-sm font-bold text-white">
        J
      </div>
      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
    </div>
  )
}
