// Bell icon with notification count
export default function BellWithBadge() {
  return (
    <div className="relative inline-flex p-1">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{ color: 'var(--c-muted)' }}
      >
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
      <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] flex items-center justify-center font-bold">
        5
      </span>
    </div>
  )
}
