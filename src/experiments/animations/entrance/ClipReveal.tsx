// Clip path reveal
export default function ClipReveal() {
  return (
    <>
      <style>{`@keyframes clipReveal{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}`}</style>
      <div className="w-16 h-16 rounded-xl bg-sky-500" style={{ animation: 'clipReveal 0.6s ease-out both' }} />
    </>
  )
}
