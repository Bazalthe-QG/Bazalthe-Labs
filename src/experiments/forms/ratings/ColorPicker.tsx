import { useState } from 'react'

// Color swatch picker
export default function ColorPicker() {
  const [color, setColor] = useState('#6D28D9')
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2 flex-wrap justify-center">
        {['#6D28D9', '#EC4899', '#F59E0B', '#10B981', '#3B82F6', '#EF4444', '#1C1917', '#F5F5F4'].map((c) => (
          <button key={c} onClick={() => setColor(c)}
            className="w-6 h-6 rounded-full border-2 transition hover:scale-110"
            style={{ background: c, borderColor: color === c ? c : 'transparent', boxShadow: color === c ? `0 0 0 2px white, 0 0 0 4px ${c}` : 'none' }} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-md border border-stone-200" style={{ background: color }} />
        <code className="text-xs font-mono" style={{ color: 'var(--c-muted)' }}>{color}</code>
      </div>
    </div>
  )
}
