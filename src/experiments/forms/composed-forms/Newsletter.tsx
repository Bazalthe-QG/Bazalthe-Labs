import { useState } from 'react'

// Newsletter subscribe form
export default function Newsletter() {
  const [agree, setAgree] = useState(false)
  return (
    <div className="w-full space-y-3">
      <div>
        <p className="text-sm font-bold mb-0.5" style={{ color: 'var(--c-text)' }}>Stay in the loop</p>
        <p className="text-xs" style={{ color: 'var(--c-muted)' }}>Weekly design & code tips, no spam.</p>
      </div>
      <div className="flex gap-2">
        <input placeholder="your@email.com" className="flex-1 text-sm px-3 py-2 rounded-xl border outline-none"
          style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
        <button className="px-4 py-2 rounded-xl text-sm font-semibold text-white shrink-0 hover:opacity-90 transition"
          style={{ background: 'var(--c-accent)' }}>Subscribe</button>
      </div>
      <label className="flex items-center gap-2 cursor-pointer" onClick={() => setAgree((v) => !v)}>
        <div className="w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition"
          style={{ background: agree ? 'var(--c-accent)' : 'transparent', borderColor: agree ? 'var(--c-accent)' : 'var(--c-border)' }}>
          {agree && (
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
        <span className="text-[10px]" style={{ color: 'var(--c-muted)' }}>I agree to the privacy policy</span>
      </label>
    </div>
  )
}
