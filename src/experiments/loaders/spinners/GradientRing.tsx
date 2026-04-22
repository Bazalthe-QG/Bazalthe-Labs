// Gradient ring spinner
export default function GradientRing() {
  return (
    <div className="w-8 h-8 rounded-full animate-spin" style={{ background: 'conic-gradient(from 0deg, transparent 0%, #7c3aed 100%)', WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))' }} />
  )
}
