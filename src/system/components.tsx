import { createContext, useContext, type ReactNode } from 'react'
import { MUTED } from './tokens'

// View mode: sections layout vs flat grid
export type ViewMode = 'categorize' | 'group'
// eslint-disable-next-line react-refresh/only-export-components
export const ViewModeContext = createContext<ViewMode>('categorize')

// Section header — hidden in group mode
export function Section({ title, children }: { title: string; children?: ReactNode }) {
  const mode = useContext(ViewModeContext)
  if (mode === 'group') return <>{children}</>
  return (
    <>
      <p
        className="text-[9px] font-bold uppercase tracking-[0.14em] mb-6 mt-12 first:mt-0"
        style={{ color: MUTED, opacity: 0.6 }}
      >
        {title}
      </p>
      {children}
    </>
  )
}

// Page layout wrapper — flat flex in group mode
export function Page({ children }: { children: ReactNode }) {
  const mode = useContext(ViewModeContext)
  return (
    <div
      className="p-10"
      style={mode === 'group' ? { display: 'flex', flexWrap: 'wrap', gap: 16 } : {}}
    >
      {children}
    </div>
  )
}

// Example grid — auto-fill up to 4 cols, transparent in group mode
export function Grid({ children, align }: { children: ReactNode; align?: 'end' }) {
  const mode = useContext(ViewModeContext)
  if (mode === 'group') return <>{children}</>
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 12,
        alignItems: align === 'end' ? 'end' : 'start',
      }}
    >
      {children}
    </div>
  )
}
