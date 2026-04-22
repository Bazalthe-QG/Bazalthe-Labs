// Minimal tab bar
import { useState } from 'react'

export default function TabsMinimal() {
  const [active, setActive] = useState(0)
  const tabs = ['All', 'Active', 'Archived']
  return (
    <div className="flex gap-4">
      {tabs.map((t, i) => (
        <button
          key={t}
          onClick={() => setActive(i)}
          className={`text-sm transition pb-1 ${active === i ? 'text-gray-900 font-semibold' : 'text-gray-400 hover:text-gray-600'}`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
