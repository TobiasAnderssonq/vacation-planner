import { useCountriesQuery } from '~/api/hooks'
import CountryListField from './CountryListField'
import { useState, type Dispatch, type SetStateAction } from 'react'
import LoaderOverlay from '../LoaderOverlay'
import { Autocomplete, Chip, TextField } from '@mui/material'
import { GiniFilter, type GiniCategory } from './GiniFilter'
import { categorizeGini, getLatestGini } from '~/utils/giniUtils'
import { LanguageFilter } from './LanguageFilter'

const getAvailableLanguages = ({ data }: { data: CountryList[] | undefined }) => {
  const languageSet = new Set<string>()
  data?.forEach(country => {
    if (country.languages) {
      Object.values(country.languages).forEach(lang => languageSet.add(lang))
    }
  })
  return Array.from(languageSet).sort()
}

const CountriesList = ({
  onSelectCountry,
  selectedCountry,
}: {
  onSelectCountry: Dispatch<SetStateAction<null | string>>
  selectedCountry: string | null
}) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedGini, setSelectedGini] = useState<GiniCategory>('')

  const { data, isPending, isError } = useCountriesQuery()

  if (isPending) return <LoaderOverlay />
  if ((!data && !isPending) || isError) return <div>Failed to fetch countries</div>

  const allLanguages = getAvailableLanguages({ data })

  const filteredCountries = data!.filter(country => {
    if (selectedLanguages.length > 0) {
      if (!country.languages) return false

      const countryLanguages = Object.values(country.languages)
      const matchesLanguage = selectedLanguages.some(lang => countryLanguages.includes(lang))

      if (!matchesLanguage) return false
    }

    if (selectedGini !== '') {
      const giniValue = getLatestGini(country.gini)
      const category = categorizeGini(giniValue)

      if (category !== selectedGini) return false
    }

    return true
  })

  return (
    <>
      <div className="flex flex-col gap-6 mb-10">
        <LanguageFilter
          options={allLanguages}
          onChange={setSelectedLanguages}
          value={selectedLanguages}
        />

        <GiniFilter value={selectedGini} onChange={setSelectedGini} />
      </div>

      {filteredCountries?.map(country => (
        <CountryListField
          flag={country.flags.png}
          name={country.name.common}
          population={country.population}
          key={country.name.common}
          selected={country.cca3 === selectedCountry}
          onClick={() => onSelectCountry(country.cca3)}
        />
      ))}
    </>
  )
}

export default CountriesList
