import { useState } from 'react'

// Six digit OTP input
export default function OtpInput() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const handleOtp = (i: number, val: string) => {
    if (!/^\d*$/.test(val)) return
    const next = [...otp]
    next[i] = val.slice(-1)
    setOtp(next)
    if (val && i < 5) (document.getElementById(`otp-${i + 1}`) as HTMLInputElement | null)?.focus()
  }
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xs font-medium" style={{ color: 'var(--c-muted)' }}>Enter the 6-digit code</p>
      <div className="flex gap-2">
        {otp.map((v, i) => (
          <input key={i} id={`otp-${i}`} value={v} onChange={(e) => handleOtp(i, e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Backspace' && !v && i > 0) (document.getElementById(`otp-${i - 1}`) as HTMLInputElement | null)?.focus() }}
            maxLength={1} className="w-10 h-12 text-center text-lg font-semibold rounded-xl border-2 outline-none transition"
            style={{ background: 'var(--c-bg)', borderColor: v ? 'var(--c-accent)' : 'var(--c-border)', color: 'var(--c-text)' }} />
        ))}
      </div>
    </div>
  )
}
