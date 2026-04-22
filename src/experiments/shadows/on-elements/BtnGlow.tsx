// Glowing button shadow
export default function BtnGlow() {
  return (
    <button
      className="px-4 py-1.5 rounded-xl text-sm font-semibold text-white bg-violet-600 transition hover:opacity-90"
      style={{ boxShadow: '0 0 18px rgba(109,40,217,0.55)' }}
    >
      Glow button
    </button>
  )
}
