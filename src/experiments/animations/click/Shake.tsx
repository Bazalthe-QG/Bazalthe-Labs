import { useRef } from 'react'

// Shake on click animation
export default function Shake() {
  const ref = useRef<HTMLButtonElement>(null)
  const shake = () => {
    const el = ref.current
    if (!el) return
    el.style.animation = 'none'
    void el.offsetWidth
    el.style.animation = 'shake .45s ease'
  }
  return (
    <>
      <style>{`@keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }`}</style>
      <button ref={ref} onClick={shake} className="w-14 h-14 rounded-xl bg-red-500 text-white text-xs font-semibold">
        Click
      </button>
    </>
  )
}
