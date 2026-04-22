// Continuous rotation
export default function RotateIn() {
  return (
    <>
      <style>{`@keyframes rotateIn{from{transform:rotate(0)}to{transform:rotate(360deg)}}`}</style>
      <div className="w-16 h-16 rounded-xl bg-amber-500" style={{ animation: 'rotateIn 2s linear infinite' }} />
    </>
  )
}
