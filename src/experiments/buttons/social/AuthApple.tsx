// Apple auth button
export default function AuthApple() {
  return (
    <button className="flex items-center gap-2.5 px-4 py-1.5 rounded-xl text-sm font-medium bg-black text-white hover:bg-stone-800 transition">
      <svg width="14" height="14" viewBox="0 0 814 1000" fill="currentColor">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 376.7 0 248.2 0 125.8c0-74.9 29.3-143.7 77.5-190.5C125.8 88.7 194.4 61 265 61c54.3 0 109.5 18.4 150.4 54.4l183.1-183.1C647.7 88.5 738.6 61 813.7 61c0 0 .1.2.1.5l-.1.1C785.8 95 774.7 157.1 788.1 340.9z" />
      </svg>
      Sign in with Apple
    </button>
  )
}
