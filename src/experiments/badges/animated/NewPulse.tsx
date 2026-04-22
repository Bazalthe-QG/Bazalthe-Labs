// New badge with pulse indicator
export default function NewPulse() {
  return (
    <span className="relative inline-flex">
      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-600 text-white">
        New
      </span>
      <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
        <span className="animate-ping absolute h-full w-full rounded-full bg-violet-400 opacity-75" />
        <span className="relative rounded-full h-2.5 w-2.5 bg-violet-500" />
      </span>
    </span>
  )
}
