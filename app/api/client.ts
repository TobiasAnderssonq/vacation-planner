import axios from 'axios'

import { COUNTRIES_BASE_URL } from './constants'
import type { Country } from './types/Country'

export const queryKeys = {
  COUNTRIES: 'countries',
  COUNTRY: 'country',
}

export const fetchCountries = async () => {
  const response = await axios.get<CountryList[]>(`${COUNTRIES_BASE_URL}/all`, {
    params: { fields: 'name,flags,population,cca3,languages,gini' },
  })

  return response.data
}

export const fetchCountry = async (code: string) => {
  const response = await axios.get<Country[]>(`${COUNTRIES_BASE_URL}/alpha/${code}`)

  return response.data
}
