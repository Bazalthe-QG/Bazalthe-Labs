// Mini media player card
import { useState } from 'react'

export default function MediaPlayer() {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-lg">♪</div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">Midnight Jazz</p>
          <p className="text-xs text-gray-500">Blue Note Quartet</p>
        </div>
        <button onClick={() => setPlaying(!playing)} className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center text-xs">
          {playing ? '⏸' : '▶'}
        </button>
      </div>
      <div className="mt-3 h-1 bg-gray-100 rounded-full"><div className="h-1 bg-violet-500 rounded-full w-1/3" /></div>
    </div>
  )
}
