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

// StaggerCascade entrance animation
export default function StaggerCascade() {
  const [on, replay] = useToggle(100)
  return (
    <>
    <div className="flex flex-col items-center gap-1">
      <div className="flex flex-col gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-2.5 rounded-full bg-pink-500 transition-all duration-400"
            style={{ width: `${(3 - i) * 20 + 20}px`, opacity: on ? 1 : 0, transform: on ? 'none' : 'translateX(-16px)', transitionDelay: `${i * 100}ms` }} />
        ))}
      </div>
      <Replay onClick={replay} />
    </div>
    </>
  )
}
