import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const { sendOtp, verifyOtp } = useAuth()
  const [step, setStep] = useState<'email' | 'code'>('email')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [resendCooldown, setResendCooldown] = useState(0)
  const codeRefs = useRef<(HTMLInputElement | null)[]>([])

  // Countdown timer for resend
  useEffect(() => {
    if (resendCooldown <= 0) return
    const id = setInterval(() => setResendCooldown((c) => c - 1), 1000)
    return () => clearInterval(id)
  }, [resendCooldown])

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await sendOtp(email.toLowerCase().trim())
      setStep('code')
      setResendCooldown(60)
      // Focus first code box after render
      setTimeout(() => codeRefs.current[0]?.focus(), 50)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send code')
    } finally {
      setLoading(false)
    }
  }

  const handleCodeChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1)
    const next = [...code]
    next[index] = digit
    setCode(next)
    if (digit && index < 5) {
      codeRefs.current[index + 1]?.focus()
    }
    // Auto-submit when all 6 digits filled
    if (digit && index === 5) {
      const full = [...next].join('')
      if (full.length === 6) void handleVerify(full)
    }
  }

  const handleCodePaste = (e: React.ClipboardEvent) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (pasted.length > 0) {
      const next = ['', '', '', '', '', '']
      for (let i = 0; i < pasted.length; i++) next[i] = pasted[i]
      setCode(next)
      const focusIdx = Math.min(pasted.length, 5)
      codeRefs.current[focusIdx]?.focus()
      if (pasted.length === 6) void handleVerify(pasted)
    }
    e.preventDefault()
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      codeRefs.current[index - 1]?.focus()
    }
  }

  const handleVerify = async (fullCode?: string) => {
    const codeStr = fullCode ?? code.join('')
    if (codeStr.length < 6) return
    setError('')
    setLoading(true)
    try {
      await verifyOtp(email.toLowerCase().trim(), codeStr)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid code')
      setCode(['', '', '', '', '', ''])
      setTimeout(() => codeRefs.current[0]?.focus(), 50)
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    if (resendCooldown > 0) return
    setError('')
    setLoading(true)
    try {
      await sendOtp(email.toLowerCase().trim())
      setCode(['', '', '', '', '', ''])
      setResendCooldown(60)
      setTimeout(() => codeRefs.current[0]?.focus(), 50)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to resend')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: 'var(--c-bg)' }}
    >
      <div className="w-full max-w-[480px] flex flex-col gap-10">
        {step === 'email' ? (
          <>
            {/* Title */}
            <div className="text-center flex flex-col items-center gap-4">
              <img
                src="/bazalthe-trsp.png"
                alt="Bazalthe Labs"
                className="w-14 h-14 rounded-2xl object-cover"
              />
              <div className="flex flex-col gap-2">
                <h1
                  className="text-4xl font-bold leading-tight tracking-tight"
                  style={{ color: 'var(--c-text)' }}
                >
                  Sign into
                  <br />
                  Bazalthe Labs
                </h1>
                <p className="text-base" style={{ color: 'var(--c-muted)' }}>
                  Enter your email to receive a sign-in code.
                </p>
              </div>
            </div>

            {/* Email form */}
            <form onSubmit={handleSendOtp} className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium"
                  style={{ color: 'var(--c-text)' }}
                  htmlFor="email-input"
                >
                  Email
                </label>
                <input
                  id="email-input"
                  type="email"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 rounded-xl border text-base outline-none transition focus:ring-2 focus:ring-violet-500/40"
                  style={{
                    background: 'var(--c-surface)',
                    borderColor: 'var(--c-border)',
                    color: 'var(--c-text)',
                  }}
                />
              </div>

              {error && <p className="text-sm text-red-400 text-center">{error}</p>}

              <button
                type="submit"
                disabled={loading || !email}
                className="w-full py-3.5 rounded-xl text-base font-semibold transition disabled:opacity-40"
                style={{ background: 'var(--c-primary)', color: 'white' }}
              >
                {loading ? 'Sending…' : 'Continue'}
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Title */}
            <div className="text-center flex flex-col gap-3">
              <h1
                className="text-4xl font-bold leading-tight tracking-tight"
                style={{ color: 'var(--c-text)' }}
              >
                Check your email
              </h1>
              <p className="text-base" style={{ color: 'var(--c-muted)' }}>
                We sent a 6-digit code to <span style={{ color: 'var(--c-text)' }}>{email}</span>
              </p>
            </div>

            {/* Code input */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-2 justify-center">
                {code.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => {
                      codeRefs.current[i] = el
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    onPaste={i === 0 ? handleCodePaste : undefined}
                    className="w-12 h-14 text-center text-xl font-bold rounded-xl border outline-none transition focus:ring-2 focus:ring-violet-500/40 select-none"
                    style={{
                      background: 'var(--c-surface)',
                      borderColor: digit ? 'var(--c-primary)' : 'var(--c-border)',
                      color: 'var(--c-text)',
                    }}
                  />
                ))}
              </div>

              {error && <p className="text-sm text-red-400 text-center">{error}</p>}

              <button
                onClick={() => void handleVerify()}
                disabled={loading || code.join('').length < 6}
                className="w-full py-3.5 rounded-xl text-base font-semibold transition disabled:opacity-40"
                style={{ background: 'var(--c-primary)', color: 'white' }}
              >
                {loading ? 'Verifying…' : 'Verify code'}
              </button>

              {/* Resend + back */}
              <div
                className="flex items-center justify-between text-sm"
                style={{ color: 'var(--c-muted)' }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setStep('email')
                    setCode(['', '', '', '', '', ''])
                    setError('')
                  }}
                  className="transition hover:opacity-80"
                >
                  ← Change email
                </button>
                <button
                  type="button"
                  onClick={() => void handleResend()}
                  disabled={resendCooldown > 0 || loading}
                  className="transition hover:opacity-80 disabled:opacity-40"
                  style={{ color: resendCooldown > 0 ? 'var(--c-muted)' : 'var(--c-primary)' }}
                >
                  {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend code'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
