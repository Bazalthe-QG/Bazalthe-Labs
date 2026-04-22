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

// LetterStagger entrance animation
export default function LetterStagger() {
  const [on, replay] = useToggle(100)
  return (
    <>
    <div className="flex flex-col items-center gap-1">
      <div className="flex gap-0.5">
        {'HELLO'.split('').map((ch, i) => (
          <span key={i} className="text-base font-bold transition-all duration-300"
            style={{ color: 'var(--c-accent)', opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(10px)', transitionDelay: `${i * 60}ms` }}>
            {ch}
          </span>
        ))}
      </div>
      <Replay onClick={replay} />
    </div>
    </>
  )
}
