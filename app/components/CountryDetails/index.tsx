import { useCountryQuery } from '~/api/hooks'
import LoaderOverlay from '../LoaderOverlay'

const CountryDetails = ({ code }: { code: string }) => {
  const { data, isPending, isError } = useCountryQuery(code)

  if (isPending) return <LoaderOverlay />
  if ((!data && !isPending) || isError) return <div>Failed to fetch countries</div>

  const selectedCountry = data?.[0]
  const capital = selectedCountry?.capital?.[0] ?? '-'
  const population = selectedCountry?.population?.toLocaleString() ?? '-'
  const area = selectedCountry?.area?.toLocaleString() ?? '-'

  const currencyObject = selectedCountry?.currencies
    ? Object.values(selectedCountry?.currencies)[0]
    : null

  const currencyName = currencyObject?.name ?? '-'
  const currencySymbol = currencyObject?.symbol ?? ''

  const languages = selectedCountry?.languages ? Object.values(selectedCountry.languages) : []
  return (
    <div className="flex gap-10 flex-col">
      <div className="flex gap-10 items-center">
        <img
          src={selectedCountry?.flags.svg}
          alt={selectedCountry?.name.common}
          className="w-20 object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-semibold">{selectedCountry?.name.common}</h1>
          <h2 className="text-xl font-semibold text-gray-500">
            {selectedCountry?.region}, {selectedCountry?.subregion}
          </h2>
        </div>
      </div>

      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Country Information</h2>

        <div className="space-y-2 text-sm">
          <p>
            <span className="text-gray-500">Capital: </span>
            <span className="font-medium">{capital}</span>
          </p>

          <p>
            <span className="text-gray-500">Currency: </span>
            <span className="font-medium">
              {currencyName} {currencySymbol && `(${currencySymbol})`}
            </span>
          </p>

          <p>
            <span className="text-gray-500">Population: </span>
            <span className="font-medium">{population}</span>
          </p>

          <p>
            <span className="text-gray-500">Area: </span>
            <span className="font-medium">{area} km²</span>
          </p>
        </div>
      </div>

      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Languages</h2>

        {languages.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {languages.map(lang => (
              <span key={lang} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                {lang}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No languages available.</p>
        )}
      </div>
    </div>
  )
}

export default CountryDetails
