// Create account form
export default function SignUp() {
  return (
    <div className="w-full space-y-3">
      <div>
        <p className="text-base font-bold mb-0.5" style={{ color: 'var(--c-text)' }}>Create account</p>
        <p className="text-xs" style={{ color: 'var(--c-muted)' }}>Start your free 14-day trial</p>
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <label className="block text-[10px] font-semibold mb-1" style={{ color: 'var(--c-muted)' }}>First name</label>
          <input placeholder="Léa" className="w-full text-sm px-3 py-2 rounded-xl border outline-none"
            style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
        </div>
        <div className="flex-1">
          <label className="block text-[10px] font-semibold mb-1" style={{ color: 'var(--c-muted)' }}>Last name</label>
          <input placeholder="Moreau" className="w-full text-sm px-3 py-2 rounded-xl border outline-none"
            style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
        </div>
      </div>
      <div>
        <label className="block text-[10px] font-semibold mb-1" style={{ color: 'var(--c-muted)' }}>Email</label>
        <input placeholder="you@example.com" className="w-full text-sm px-3 py-2 rounded-xl border outline-none"
          style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
      </div>
      <div>
        <label className="block text-[10px] font-semibold mb-1" style={{ color: 'var(--c-muted)' }}>Password</label>
        <input type="password" placeholder="Min. 8 characters" className="w-full text-sm px-3 py-2 rounded-xl border outline-none"
          style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
      </div>
      <button className="w-full py-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90"
        style={{ background: 'var(--c-accent)' }}>Create account →</button>
      <p className="text-[10px] text-center" style={{ color: 'var(--c-muted)' }}>
        Already have an account? <span className="cursor-pointer" style={{ color: 'var(--c-accent)' }}>Sign in</span>
      </p>
    </div>
  )
}
