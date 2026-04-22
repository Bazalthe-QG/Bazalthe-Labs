// Theme segment control
import { useState } from 'react'

export default function SegTheme() {
  const [active, setActive] = useState(0)
  const items = ['Light', 'Dark', 'System']
  return (
    <div className="inline-flex rounded-lg bg-gray-100 p-1">
      {items.map((item, i) => (
        <button
          key={item}
          onClick={() => setActive(i)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${active === i ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
