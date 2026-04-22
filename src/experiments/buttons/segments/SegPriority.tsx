// Priority segment control
import { useState } from 'react'

export default function SegPriority() {
  const [active, setActive] = useState(1)
  const items = [{ l: 'Low', bg: 'bg-blue-500' }, { l: 'Medium', bg: 'bg-amber-500' }, { l: 'High', bg: 'bg-red-500' }]
  return (
    <div className="inline-flex rounded-lg bg-gray-900 p-1 gap-0.5">
      {items.map((item, i) => (
        <button
          key={item.l}
          onClick={() => setActive(i)}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${active === i ? `${item.bg} text-white` : 'text-gray-400 hover:text-gray-200'}`}
        >
          {item.l}
        </button>
      ))}
    </div>
  )
}
