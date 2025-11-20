const CountryListField = ({
  population,
  name,
  flag,
  onClick,
  selected,
}: {
  population: number
  name: string
  flag: string
  onClick: () => void
  selected: boolean
}) => {
  return (
    <div
      className={`flex items-center space-x-3 p-2 rounded cursor-pointer
        hover:bg-gray-100
        ${selected ? 'bg-gray-200' : ''}
      `}
      onClick={onClick}
    >
      <img src={flag} alt={name} className="w-8 h-6 object-cover rounded" />
      <div className="flex flex-col leading-tight">
        <span className="font-medium text-sm">{name}</span>
        <span className="text-xs text-gray-600">Population: {population.toLocaleString()}</span>
      </div>
    </div>
  )
}

export default CountryListField
