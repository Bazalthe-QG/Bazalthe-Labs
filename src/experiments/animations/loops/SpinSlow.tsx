// Slow spin animation
export default function SpinSlow() {
  return (
    <>
      <style>{`@keyframes spinSlow{from{transform:rotate(0)}to{transform:rotate(360deg)}}`}</style>
      <div className="w-16 h-16 rounded-xl bg-rose-500" style={{ animation: 'spinSlow 4s linear infinite' }} />
    </>
  )
}
