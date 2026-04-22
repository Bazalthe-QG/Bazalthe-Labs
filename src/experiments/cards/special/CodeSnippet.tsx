// Code snippet preview
export default function CodeSnippet() {
  return (
    // Code snippet card
    <div className="w-full rounded-xl overflow-hidden" style={{ background: '#1e1e2e' }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        <span className="text-[10px] ml-2 text-white/40">useAuth.ts</span>
      </div>
      <pre className="p-3 text-[10px] leading-relaxed font-mono overflow-hidden">
        <span style={{ color: '#cba6f7' }}>function </span>
        <span style={{ color: '#89b4fa' }}>useAuth</span>
        <span style={{ color: '#cdd6f4' }}>{'() {'}</span>
        {'\n'}
        <span style={{ color: '#cdd6f4' }}>{'  '}</span>
        <span style={{ color: '#cba6f7' }}>{'return '}</span>
        <span style={{ color: '#89dceb' }}>useContext</span>
        <span style={{ color: '#cdd6f4' }}>(AuthCtx)</span>
        {'\n'}
        <span style={{ color: '#cdd6f4' }}>{'}'}</span>
      </pre>
    </div>
  )
}
