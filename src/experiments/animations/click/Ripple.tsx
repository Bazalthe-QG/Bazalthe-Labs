import { useRef } from 'react'

// Ripple effect on click
export default function Ripple() {
  const ref = useRef<HTMLDivElement>(null)
  const ripple = () => {
    const el = ref.current
    if (!el) return
    el.style.animation = 'none'
    void el.offsetWidth
    el.style.animation = 'rippleOut .8s ease'
  }
  return (
    <>
      <style>{`@keyframes rippleOut { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(2.5);opacity:0} }`}</style>
      <div className="relative flex items-center justify-center">
        <div ref={ref} className="w-10 h-10 rounded-full absolute" style={{ background: 'var(--c-accent)', opacity: 0 }} />
        <button onClick={ripple} className="w-10 h-10 rounded-full z-10 text-xs font-bold text-white flex items-center justify-center" style={{ background: 'var(--c-accent)' }}>
          ●
        </button>
      </div>
    </>
  )
}
