import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

export type GiniCategory = 'low' | 'medium' | 'high' | ''

export const GiniFilter = ({
  value,
  onChange,
}: {
  value: GiniCategory
  onChange: (value: GiniCategory) => void
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Gini Filter</InputLabel>
      <Select
        value={value}
        label="Gini Filter"
        onChange={e => onChange(e.target.value as GiniCategory)}
        size="medium"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="high">High</MenuItem>
      </Select>
    </FormControl>
  )
}
