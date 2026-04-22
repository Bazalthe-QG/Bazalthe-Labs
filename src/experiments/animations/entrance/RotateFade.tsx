// Rotate and fade in
export default function RotateFade() {
  return (
    <>
      <style>{`@keyframes rotateFade{from{opacity:0;transform:rotate(-180deg) scale(0.5)}to{opacity:1;transform:rotate(0) scale(1)}}`}</style>
      <div className="w-16 h-16 rounded-xl bg-amber-500" style={{ animation: 'rotateFade 0.7s ease-out both' }} />
    </>
  )
}
