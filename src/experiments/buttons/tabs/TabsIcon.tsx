// Icon tab bar
import { useState } from 'react'

export default function TabsIcon() {
  const [active, setActive] = useState(0)
  const tabs = [
    { l: 'Home', d: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
    { l: 'Search', d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
    { l: 'Profile', d: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' },
  ]
  return (
    <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
      {tabs.map((t, i) => (
        <button
          key={t.l}
          onClick={() => setActive(i)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition ${active === i ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={t.d} /></svg>
          {t.l}
        </button>
      ))}
    </div>
  )
}
