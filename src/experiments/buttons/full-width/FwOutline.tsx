// Full-width outline button
export default function FwOutline() {
  return (
    <button
      className="w-full py-2.5 rounded-xl text-sm font-semibold border transition hover:bg-violet-50"
      style={{ borderColor: 'var(--c-accent)', color: 'var(--c-accent)' }}
    >
      Learn more
    </button>
  )
}
