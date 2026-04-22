// Scale in animation
export default function ScaleIn() {
  return (
    <>
      <style>{`@keyframes scaleIn{from{opacity:0;transform:scale(0.5)}to{opacity:1;transform:scale(1)}}`}</style>
      <div className="w-16 h-16 rounded-xl bg-fuchsia-500" style={{ animation: 'scaleIn 0.5s ease-out both' }} />
    </>
  )
}
