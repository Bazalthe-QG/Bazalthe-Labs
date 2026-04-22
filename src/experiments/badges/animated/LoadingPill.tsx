// Spinner pill loading badge
export default function LoadingPill() {
  return (
    <span className="flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-medium bg-violet-50 text-violet-700">
      <svg
        className="animate-spin"
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path
          d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"
          opacity=".4"
        />
        <path d="M12 2v4" />
      </svg>
      Processing
    </span>
  )
}
