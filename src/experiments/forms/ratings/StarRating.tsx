import { useState } from 'react'

// Interactive star rating
export default function StarRating() {
  const [stars, setStars] = useState(0)
  const [hoverStar, setHoverStar] = useState(0)
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <button key={i} onMouseEnter={() => setHoverStar(i)} onMouseLeave={() => setHoverStar(0)} onClick={() => setStars(i)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill={i <= (hoverStar || stars) ? '#f59e0b' : 'none'}
              stroke={i <= (hoverStar || stars) ? '#f59e0b' : '#d1d5db'} strokeWidth="2" className="transition">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </button>
        ))}
      </div>
      <span className="text-[10px]" style={{ color: 'var(--c-muted)' }}>{stars ? `${stars} / 5` : 'Click to rate'}</span>
    </div>
  )
}
