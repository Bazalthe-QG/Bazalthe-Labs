// Notification card stack
import { useState } from 'react'

export default function Notifications() {
  const [items] = useState([
    { id: 1, title: 'New comment', desc: 'Alice replied to your post', time: '2m ago', read: false },
    { id: 2, title: 'Mention', desc: 'You were mentioned in #design', time: '1h ago', read: false },
    { id: 3, title: 'Update', desc: 'Project v2.1 deployed', time: '3h ago', read: true },
  ])
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-900">Notifications</span>
        <span className="text-xs text-violet-500 cursor-pointer">Mark all read</span>
      </div>
      {items.map(n => (
        <div key={n.id} className={`px-4 py-3 flex gap-3 border-b border-gray-50 last:border-0 ${!n.read ? 'bg-violet-50/40' : ''}`}>
          <div className={`w-2 h-2 mt-1.5 rounded-full shrink-0 ${!n.read ? 'bg-violet-500' : 'bg-transparent'}`} />
          <div>
            <p className="text-sm font-medium text-gray-900">{n.title}</p>
            <p className="text-xs text-gray-500">{n.desc}</p>
            <p className="text-[10px] text-gray-400 mt-1">{n.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
