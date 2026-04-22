import { ANIMATIONS } from '../config/constants'

interface SkeletonProps {
  className?: string
  count?: number
}

export function Skeleton({ className = '', count = 1 }: SkeletonProps) {
  const keyframes = `
    @keyframes skeleton-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `

  const skeletons = Array.from({ length: count })

  return (
    <>
      <style>{keyframes}</style>
      {skeletons.map((_, i) => (
        <div
          key={i}
          className={`rounded-md ${className}`}
          style={{
            background: 'rgba(109, 40, 217, 0.08)',
            animation: `skeleton-pulse ${ANIMATIONS.skeletonPulse}`,
          }}
        />
      ))}
    </>
  )
}

export function SkeletonCard({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex gap-3">
          <Skeleton className="w-12 h-12 flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function SkeletonGrid({ cols = 3, rows = 2 }: { cols?: number; rows?: number }) {
  return (
    <div className="p-10 max-w-6xl space-y-8">
      <Skeleton className="h-6 w-48" />
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: cols * rows }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-28 w-full rounded-xl" />
            <Skeleton className="h-3 w-2/3" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}
