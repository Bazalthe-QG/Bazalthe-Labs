// Fade in upward animation
export default function FadeInUp() {
  return (
    <>
      <style>{`@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div className="w-16 h-16 rounded-xl bg-violet-500" style={{ animation: 'fadeInUp 0.6s ease-out both' }} />
    </>
  )
}
