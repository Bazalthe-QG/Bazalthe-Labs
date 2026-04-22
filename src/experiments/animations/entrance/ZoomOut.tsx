// Zoom out entrance
export default function ZoomOut() {
  return (
    <>
      <style>{`@keyframes zoomOut{from{opacity:0;transform:scale(1.5)}to{opacity:1;transform:scale(1)}}`}</style>
      <div className="w-16 h-16 rounded-xl bg-rose-500" style={{ animation: 'zoomOut 0.5s ease-out both' }} />
    </>
  )
}
