const inputBase = 'w-full text-sm outline-none transition'

// Sign in form
export default function SignIn() {
  return (
    <div className="w-full space-y-4">
      <div>
        <p className="text-base font-bold mb-0.5" style={{ color: 'var(--c-text)' }}>Welcome back</p>
        <p className="text-xs" style={{ color: 'var(--c-muted)' }}>Sign in to your account</p>
      </div>
      <div className="space-y-3">
        <div>
          <label className="block text-[10px] font-semibold mb-1" style={{ color: 'var(--c-muted)' }}>Email</label>
          <input placeholder="you@example.com" className={`${inputBase} px-3 py-2 rounded-xl border`}
            style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-[10px] font-semibold" style={{ color: 'var(--c-muted)' }}>Password</label>
            <span className="text-[10px] cursor-pointer" style={{ color: 'var(--c-accent)' }}>Forgot?</span>
          </div>
          <input type="password" placeholder="••••••••" className={`${inputBase} px-3 py-2 rounded-xl border`}
            style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
        </div>
      </div>
      <button className="w-full py-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90"
        style={{ background: 'var(--c-accent)' }}>Sign in</button>
      <p className="text-[10px] text-center" style={{ color: 'var(--c-muted)' }}>
        No account? <span className="cursor-pointer" style={{ color: 'var(--c-accent)' }}>Sign up</span>
      </p>
    </div>
  )
}
