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

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="aspect-square" />
      ))}
    </div>
  )
}
