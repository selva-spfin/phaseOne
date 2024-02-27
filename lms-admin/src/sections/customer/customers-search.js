import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material'
import { useState } from 'react'

export const CustomersSearch = ({ data, onSearch, placeholder }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = event => {
    const query = event.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  return (
    <Card sx={{ p: 2 }}>
      <OutlinedInput
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
        placeholder={placeholder ?? 'Search customer'}
        startAdornment={
          <InputAdornment position="start">
            <SvgIcon color="action"
fontSize="small">
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        }
        sx={{ maxWidth: 500 }}
      />
    </Card>
  )
}
