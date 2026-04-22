import { useEffect, useState } from 'react'

function useToggle(delay = 100) {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setOn(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  const replay = () => {
    setOn(false)
    setTimeout(() => setOn(true), 80)
  }
  return [on, replay] as const
}

function Replay({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="text-[10px] hover:underline mt-1" style={{ color: 'var(--c-muted)' }}>
      replay
    </button>
  )
}

// SlideTop entrance animation
export default function SlideTop() {
  const [on, replay] = useToggle(200)
  return (
    <>
    <div className="overflow-hidden flex flex-col items-center gap-1">
      <div className="w-12 h-12 rounded-xl bg-teal-500 transition-all duration-500"
        style={{ opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(-40px)' }} />
      <Replay onClick={replay} />
    </div>
    </>
  )
}
