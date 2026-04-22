import { useState } from 'react'

// Three step form wizard
export default function StepWizard() {
  const [step, setStep] = useState(1)
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-0">
        {[1, 2, 3].map((s, i) => (
          <div key={s} className="flex items-center flex-1">
            <button onClick={() => setStep(s)}
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 shrink-0 transition"
              style={{ background: s <= step ? 'var(--c-accent)' : 'transparent', borderColor: s <= step ? 'var(--c-accent)' : 'var(--c-border)', color: s <= step ? 'white' : 'var(--c-muted)' }}>
              {s < step ? (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : s}
            </button>
            {i < 2 && <div className="flex-1 h-0.5 mx-1 transition-colors" style={{ background: step > s ? 'var(--c-accent)' : 'var(--c-border)' }} />}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px]" style={{ color: 'var(--c-muted)' }}>
        <span>Account</span>
        <span>Profile</span>
        <span>Payment</span>
      </div>
      {step === 1 && (
        <div className="space-y-3">
          <input placeholder="Email address" className="w-full text-sm px-3 py-2 rounded-xl border outline-none"
            style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
          <input type="password" placeholder="Password" className="w-full text-sm px-3 py-2 rounded-xl border outline-none"
            style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
        </div>
      )}
      {step === 2 && (
        <div className="space-y-3">
          <input placeholder="Display name" className="w-full text-sm px-3 py-2 rounded-xl border outline-none"
            style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
          <textarea rows={2} placeholder="Short bio…" className="w-full text-sm px-3 py-2 rounded-xl border outline-none resize-none"
            style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
        </div>
      )}
      {step === 3 && (
        <div className="space-y-3">
          <input placeholder="Card number" className="w-full text-sm px-3 py-2 rounded-xl border outline-none"
            style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
          <div className="flex gap-2">
            <input placeholder="MM/YY" className="flex-1 text-sm px-3 py-2 rounded-xl border outline-none"
              style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
            <input placeholder="CVV" className="w-20 text-sm px-3 py-2 rounded-xl border outline-none"
              style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
          </div>
        </div>
      )}
      <div className="flex gap-2 pt-1">
        {step > 1 && (
          <button onClick={() => setStep((s) => s - 1)}
            className="flex-1 py-1.5 rounded-xl text-sm border transition hover:bg-stone-50"
            style={{ borderColor: 'var(--c-border)', color: 'var(--c-text)' }}>Back</button>
        )}
        <button onClick={() => setStep((s) => Math.min(s + 1, 3))}
          className="flex-1 py-1.5 rounded-xl text-sm font-semibold text-white transition hover:opacity-90"
          style={{ background: 'var(--c-accent)' }}>{step === 3 ? 'Complete' : 'Continue →'}</button>
      </div>
    </div>
  )
}
