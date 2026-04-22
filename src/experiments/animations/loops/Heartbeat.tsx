// Heartbeat animation
export default function Heartbeat() {
  return (
    <>
      <style>{`@keyframes heartbeat{0%,100%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.15)}56%{transform:scale(1)}}`}</style>
      <div className="text-3xl" style={{ animation: 'heartbeat 1.5s ease infinite' }}>❤️</div>
    </>
  )
}
