// Typewriter cursor blinking effect
export default function Typewriter() {
  return (
    <>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
      <div
        className="flex items-center gap-0.5 text-sm font-mono"
        style={{ color: 'var(--c-text)' }}
      >
        Loading
        <span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
      </div>
    </>
  )
}
