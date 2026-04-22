// Progress bar
import { useState, useEffect } from 'react'

export default function ProgressBar() {
  const [w, setW] = useState(0)
  useEffect(() => { const t = setTimeout(() => setW(72), 300); return () => clearTimeout(t) }, [])
  return (
    <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div className="h-full bg-violet-500 rounded-full transition-all duration-1000" style={{ width: w+'%' }} />
    </div>
  )
}
