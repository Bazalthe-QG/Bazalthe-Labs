// Task list card
import { useState } from 'react'

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review pull request', done: true },
    { id: 2, text: 'Update documentation', done: false },
    { id: 3, text: 'Fix navigation bug', done: false },
  ])
  const toggle = (id: number) => setTasks(t => t.map(x => x.id === id ? { ...x, done: !x.done } : x))
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-sm font-semibold text-gray-900 mb-3">Tasks</p>
      <div className="space-y-2">
        {tasks.map(t => (
          <label key={t.id} className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} className="accent-violet-500" />
            <span className={`text-sm ${t.done ? 'line-through text-gray-400' : 'text-gray-700'}`}>{t.text}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
