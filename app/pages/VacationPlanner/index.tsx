import { Autocomplete } from '@mui/material'
import { useState } from 'react'
import CountriesList from '~/components/CountriesList'
import CountryDetails from '~/components/CountryDetails'

const VacationPlanner = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-96 border-r border-gray-300 overflow-y-auto p-2 relative">
        <h2 className="text-lg font-semibold mb-2 mb-12">Vacation Planner</h2>
        <CountriesList onSelectCountry={setSelectedCountry} selectedCountry={selectedCountry} />
      </div>
      <div className="flex-1 p-6 bg-gray-50 relative">
        {selectedCountry ? (
          <CountryDetails code={selectedCountry} />
        ) : (
          <div className="flex items-center h-screen justify-center">
            <h2 className="text-lg font-semibold">No country selected</h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default VacationPlanner
