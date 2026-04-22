// Icon segment control
import { useState } from 'react'

export default function SegIcon() {
  const [active, setActive] = useState(0)
  const icons = [
    { l: 'Grid', d: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z' },
    { l: 'List', d: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01' },
    { l: 'Board', d: 'M3 3h5v18H3zM10 3h5v10h-5zM17 3h4v14h-4z' },
  ]
  return (
    <div className="inline-flex rounded-lg border border-gray-200 p-0.5">
      {icons.map((ic, i) => (
        <button
          key={ic.l}
          onClick={() => setActive(i)}
          title={ic.l}
          className={`w-9 h-9 flex items-center justify-center rounded-md transition ${active === i ? 'bg-violet-500 text-white' : 'text-gray-400 hover:text-gray-600'}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={ic.d} /></svg>
        </button>
      ))}
    </div>
  )
}
