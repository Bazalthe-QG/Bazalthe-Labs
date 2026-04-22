// Avatar with busy status dot
export default function AvatarBusy() {
  return (
    <div className="relative inline-flex">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-sm font-bold text-white">
        M
      </div>
      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-amber-400 border-2 border-white" />
    </div>
  )
}
