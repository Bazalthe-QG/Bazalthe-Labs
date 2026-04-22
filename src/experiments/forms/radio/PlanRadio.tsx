import { useState } from 'react'

// Plan radio card selector
export default function PlanRadio() {
  const [plan, setPlan] = useState('pro')
  return (
    <div className="flex flex-col gap-2">
      {[['free', 'Free', '$0/mo'], ['pro', 'Pro', '$12/mo'], ['team', 'Team', '$49/mo']].map(([v, l, p]) => (
        <button key={v} onClick={() => setPlan(v)}
          className="flex items-center gap-2.5 px-3 py-2 rounded-xl border-2 text-left transition"
          style={{ borderColor: plan === v ? 'var(--c-accent)' : 'var(--c-border)', background: plan === v ? 'rgba(109,40,217,0.04)' : 'transparent' }}>
          <div className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0"
            style={{ borderColor: plan === v ? 'var(--c-accent)' : 'var(--c-border)' }}>
            {plan === v && <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--c-accent)' }} />}
          </div>
          <div className="flex-1">
            <span className="text-xs font-medium" style={{ color: 'var(--c-text)' }}>{l}</span>
          </div>
          <span className="text-xs font-semibold" style={{ color: plan === v ? 'var(--c-accent)' : 'var(--c-muted)' }}>{p}</span>
        </button>
      ))}
    </div>
  )
}
