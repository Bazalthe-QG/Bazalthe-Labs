// Invite members to workspace
export default function InviteMembers() {
  return (
    <div className="w-full space-y-3">
      <p className="text-sm font-bold" style={{ color: 'var(--c-text)' }}>Invite to workspace</p>
      <div className="flex gap-2">
        <input placeholder="colleague@company.com" className="flex-1 text-sm px-3 py-2 rounded-xl border outline-none"
          style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-text)' }} />
        <select className="text-xs px-2 py-2 rounded-xl border outline-none"
          style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border)', color: 'var(--c-muted)' }}>
          <option>Editor</option>
          <option>Viewer</option>
          <option>Admin</option>
        </select>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 py-2 rounded-xl text-sm border transition hover:bg-stone-50"
          style={{ borderColor: 'var(--c-border)', color: 'var(--c-text)' }}>Copy link</button>
        <button className="flex-1 py-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90"
          style={{ background: 'var(--c-accent)' }}>Send invite</button>
      </div>
    </div>
  )
}
