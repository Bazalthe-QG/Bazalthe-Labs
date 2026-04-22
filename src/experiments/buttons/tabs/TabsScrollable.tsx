// Scrollable tab bar
import { useState } from 'react'

export default function TabsScrollable() {
  const [active, setActive] = useState(0)
  const tabs = ['Home', 'Trending', 'Music', 'Sports', 'Gaming', 'News', 'Live']
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 max-w-[280px]">
      {tabs.map((t, i) => (
        <button
          key={t}
          onClick={() => setActive(i)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${active === i ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
