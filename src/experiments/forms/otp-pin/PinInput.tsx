// Four digit PIN input
export default function PinInput() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xs font-medium" style={{ color: 'var(--c-muted)' }}>Enter PIN</p>
      <div className="flex gap-3">
        {[0, 1, 2, 3].map((i) => (
          <input key={i} type="password" maxLength={1}
            className="w-10 h-12 text-center text-xl font-bold rounded-2xl border-2 outline-none transition"
            style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
        ))}
      </div>
    </div>
  )
}
