import type { GiniCategory } from '~/components/CountriesList/GiniFilter'

export const getLatestGini = (gini?: Record<string, number>): number | null => {
  if (!gini) return null
  const years = Object.keys(gini)
    .map(Number)
    .sort((a, b) => b - a)
  const latestYear = years[0]
  return gini[latestYear] ?? null
}

export const categorizeGini = (gini: number | null): GiniCategory | null => {
  if (gini == null) return null
  if (gini < 30) return 'low'
  if (gini <= 45) return 'medium'
  return 'high'
}
