// Loading state button
export default function StateLoading() {
  return (
    <button
      disabled
      className="px-4 py-1.5 rounded-xl text-sm font-medium text-white bg-blue-500 inline-flex items-center gap-2 cursor-wait opacity-75"
    >
      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      Loading
    </button>
  )
}
