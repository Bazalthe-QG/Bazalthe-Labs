// Bordered tab bar
import { useState } from 'react'

export default function TabsBordered() {
  const [active, setActive] = useState(0)
  const tabs = ['Overview', 'Details', 'Reviews']
  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((t, i) => (
        <button
          key={t}
          onClick={() => setActive(i)}
          className={`px-4 py-2.5 text-sm font-medium transition border-b-2 -mb-px ${active === i ? 'border-violet-500 text-violet-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
