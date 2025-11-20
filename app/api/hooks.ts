import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { fetchCountries, fetchCountry, queryKeys } from './client'
import { withMinimumDelay } from '~/utils/withMinimumDelay'

export const useCountriesQuery = () => {
  const { data, error, isError, isPending } = useQuery({
    queryKey: [queryKeys.COUNTRIES],
    queryFn: withMinimumDelay(() => fetchCountries(), 3000),
    retry: false,
    placeholderData: keepPreviousData,
  })

  return {
    data,
    error,
    isError,
    isPending,
  }
}

export const useCountryQuery = (code: string) => {
  const { data, error, isError, isPending } = useQuery({
    queryKey: [queryKeys.COUNTRY, code],
    queryFn: withMinimumDelay(() => fetchCountry(code), 3000),
    retry: false,
  })

  return {
    data,
    error,
    isError,
    isPending,
  }
}
