// Color shift animation
export default function ColorShift() {
  return (
    <>
      <style>{`@keyframes colorShift{0%{background:#7c3aed}33%{background:#ec4899}66%{background:#06b6d4}100%{background:#7c3aed}}`}</style>
      <div className="w-16 h-16 rounded-xl" style={{ animation: 'colorShift 3s ease infinite' }} />
    </>
  )
}
