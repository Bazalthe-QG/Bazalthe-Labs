// Rounded segment control
import { useState } from 'react'

export default function SegRounded() {
  const [active, setActive] = useState(0)
  const items = ['Day', 'Week', 'Month', 'Year']
  return (
    <div className="inline-flex rounded-full bg-violet-50 p-1">
      {items.map((item, i) => (
        <button
          key={item}
          onClick={() => setActive(i)}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${active === i ? 'bg-violet-500 text-white shadow-md' : 'text-violet-400 hover:text-violet-600'}`}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
