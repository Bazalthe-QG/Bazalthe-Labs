import { useRef } from 'react'

// SVG path draw animation
export default function SvgDraw() {
  const ref = useRef<SVGPathElement>(null)
  const draw = () => {
    const el = ref.current
    if (!el) return
    const len = el.getTotalLength()
    el.style.strokeDasharray = `${len}`
    el.style.strokeDashoffset = `${len}`
    el.style.animation = 'none'
    void (el.parentElement as HTMLElement | null)?.offsetWidth
    el.style.animation = 'drawLine 1.2s ease forwards'
  }
  return (
    <>
      <style>{`@keyframes drawLine { to{stroke-dashoffset:0} }`}</style>
      <div className="flex flex-col items-center gap-1">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="2" strokeLinecap="round">
          <path ref={ref} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <button onClick={draw} className="text-[10px] hover:underline" style={{ color: 'var(--c-muted)' }}>draw</button>
      </div>
    </>
  )
}
