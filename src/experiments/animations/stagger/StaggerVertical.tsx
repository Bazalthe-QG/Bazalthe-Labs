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

// StaggerVertical entrance animation
export default function StaggerVertical() {
  const [on, replay] = useToggle(100)
  return (
    <>
    <div className="flex flex-col items-center gap-1">
      <div className="flex gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="w-3 h-10 rounded-full bg-violet-500 transition-all duration-500"
            style={{ opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(12px)', transitionDelay: `${i * 80}ms` }} />
        ))}
      </div>
      <Replay onClick={replay} />
    </div>
    </>
  )
}
