import { Autocomplete, Chip, TextField } from '@mui/material'

type LanguageFilterProps = {
  options: string[]
  value: string[]
  onChange: (newValue: string[]) => void
}

export const LanguageFilter = ({ options, value, onChange }: LanguageFilterProps) => {
  return (
    <Autocomplete
      multiple
      options={options}
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      renderValue={(value: string[]) =>
        value.map(option => (
          <Chip label={option} size="small" key={option} sx={{ marginRight: '4px' }} />
        ))
      }
      renderInput={params => (
        <TextField {...params} label="Filter by languages" placeholder="Languages" />
      )}
    />
  )
}
