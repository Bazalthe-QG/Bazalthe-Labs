// Size segment control
import { useState } from 'react'

export default function SegSize() {
  const [active, setActive] = useState(1)
  const items = ['S', 'M', 'L', 'XL']
  return (
    <div className="inline-flex rounded-full bg-gray-100 p-1">
      {items.map((item, i) => (
        <button
          key={item}
          onClick={() => setActive(i)}
          className={`w-9 h-9 rounded-full text-sm font-bold transition ${active === i ? 'bg-violet-500 text-white shadow' : 'text-gray-500 hover:text-gray-700'}`}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
