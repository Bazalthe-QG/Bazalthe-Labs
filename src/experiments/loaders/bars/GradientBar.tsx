// Gradient progress bar
export default function GradientBar() {
  return (
    <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" />
    </div>
  )
}
