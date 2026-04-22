import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { type Favorite } from './constants'
export { type Favorite } from './constants'

interface FavCtx {
  favorites: Favorite[]
  addFavorite: (f: Favorite) => void
  removeFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
  /** '' means no filter — show everything */
  currentProject: string
  setCurrentProject: (p: string) => void
  /** concept label, '' means no filter */
  currentConcept: string
  setCurrentConcept: (c: string) => void
}

const Ctx = createContext<FavCtx | null>(null)

function load<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key)
    return v !== null ? JSON.parse(v) : fallback
  } catch {
    return fallback
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>(() => load('uilab:fav', []))
  const [currentProject, setCurrentProject] = useState<string>(() => load('uilab:activeProj', ''))
  const [currentConcept, setCurrentConcept] = useState<string>(() =>
    load('uilab:activeConcept', '')
  )

  useEffect(() => {
    localStorage.setItem('uilab:fav', JSON.stringify(favorites))
  }, [favorites])
  useEffect(() => {
    localStorage.setItem('uilab:activeProj', JSON.stringify(currentProject))
  }, [currentProject])
  useEffect(() => {
    localStorage.setItem('uilab:activeConcept', JSON.stringify(currentConcept))
  }, [currentConcept])

  return (
    <Ctx.Provider
      value={{
        favorites,
        addFavorite: (f) => setFavorites((p) => (p.find((x) => x.id === f.id) ? p : [...p, f])),
        removeFavorite: (id) => setFavorites((p) => p.filter((x) => x.id !== id)),
        isFavorite: (id) => favorites.some((f) => f.id === id),
        currentProject,
        setCurrentProject,
        currentConcept,
        setCurrentConcept,
      }}
    >
      {children}
    </Ctx.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavorites() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider')
  return ctx
}
