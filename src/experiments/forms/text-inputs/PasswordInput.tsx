import { useState } from 'react'

const inputBase = 'w-full text-sm outline-none transition'

// Password with toggle visibility
export default function PasswordInput() {
  const [pw, setPw] = useState('')
  const [showPw, setShowPw] = useState(false)
  return (
    <div className="w-full">
      <label className="block text-[10px] font-semibold mb-1.5" style={{ color: 'var(--c-muted)' }}>Password</label>
      <div className="relative">
        <input type={showPw ? 'text' : 'password'} value={pw} onChange={(e) => setPw(e.target.value)}
          placeholder="••••••••" className={`${inputBase} px-3 py-2 rounded-xl border pr-9`}
          style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
        <button onClick={() => setShowPw((s) => !s)} className="absolute right-2.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--c-muted)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {showPw ? (
              <>
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </>
            ) : (
              <>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </>
            )}
          </svg>
        </button>
      </div>
    </div>
  )
}
