// Vertical tab bar
import { useState } from 'react'

export default function TabsVertical() {
  const [active, setActive] = useState(0)
  const tabs = ['General', 'Security', 'Billing', 'Team']
  return (
    <div className="flex flex-col gap-1 w-40">
      {tabs.map((t, i) => (
        <button
          key={t}
          onClick={() => setActive(i)}
          className={`px-3 py-2 rounded-lg text-sm text-left transition ${active === i ? 'bg-violet-50 text-violet-600 font-semibold' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
