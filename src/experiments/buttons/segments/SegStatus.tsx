// Status segment control
import { useState } from 'react'

export default function SegStatus() {
  const [active, setActive] = useState(0)
  const items = [{ l: 'Active', c: 'text-emerald-600 bg-emerald-50' }, { l: 'Inactive', c: 'text-gray-600 bg-gray-50' }, { l: 'All', c: 'text-violet-600 bg-violet-50' }]
  return (
    <div className="inline-flex gap-1 rounded-lg border border-gray-200 p-1">
      {items.map((item, i) => (
        <button
          key={item.l}
          onClick={() => setActive(i)}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${active === i ? item.c : 'text-gray-400 hover:text-gray-600'}`}
        >
          {item.l}
        </button>
      ))}
    </div>
  )
}
