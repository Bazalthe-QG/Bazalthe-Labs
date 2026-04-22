// Vite eager-loads all experiment TSX
const raw = import.meta.glob('/src/experiments/**/*.tsx', { as: 'raw', eager: true })

/**
 * Get the raw source code of a component file
 * @param srcPath - Path relative
 * @returns source string or null
 */

export function getComponentSource(srcPath: string): string | null {
  const key = `/src/experiments/${srcPath}.tsx`
  return (raw as Record<string, string>)[key] ?? null
}
