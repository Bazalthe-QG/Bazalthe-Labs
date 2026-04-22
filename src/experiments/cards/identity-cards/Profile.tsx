// User profile card
// Profile card with cover, avatar and stats
export default function Profile() {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      <div className="h-16 bg-gradient-to-br from-violet-500 to-indigo-600" />
      <div className="px-4 pb-4 -mt-5">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-300 to-pink-300 border-2 border-white mb-2" />
        <p className="font-semibold text-sm" style={{ color: 'var(--c-text)' }}>
          Léa Moreau
        </p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--c-muted)' }}>
          Product Designer · Paris
        </p>
        <div className="flex gap-3 mt-3 text-center">
          <div>
            <p className="text-sm font-bold" style={{ color: 'var(--c-text)' }}>
              142
            </p>
            <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
              Following
            </p>
          </div>
          <div className="w-px" style={{ background: 'var(--c-border)' }} />
          <div>
            <p className="text-sm font-bold" style={{ color: 'var(--c-text)' }}>
              4.2k
            </p>
            <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
              Followers
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
