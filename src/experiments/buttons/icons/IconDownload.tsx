// Download icon button
export default function IconDownload() {
  return (
    // Download button
    <button className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download
    </button>
  )
}
