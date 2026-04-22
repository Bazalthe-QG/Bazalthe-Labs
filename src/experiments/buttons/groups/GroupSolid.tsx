// Solid button group
export default function GroupSolid() {
  return (
    <div className="inline-flex rounded-xl overflow-hidden">
      {['Day', 'Week', 'Month'].map((l) => (
        <button
          key={l}
          className="px-4 py-1.5 text-sm font-medium transition bg-violet-600 text-white border-r border-violet-500 last:border-r-0 hover:bg-violet-700"
        >
          {l}
        </button>
      ))}
    </div>
  )
}
