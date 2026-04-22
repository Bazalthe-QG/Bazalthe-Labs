// Gradient shift animation
export default function GradientShift() {
  return (
    <>
      <style>{`@keyframes gradShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
      <div className="w-16 h-16 rounded-xl" style={{ background: 'linear-gradient(270deg,#7c3aed,#ec4899,#06b6d4,#7c3aed)', backgroundSize: '600% 600%', animation: 'gradShift 3s ease infinite' }} />
    </>
  )
}
