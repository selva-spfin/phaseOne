import { useContext } from 'react'
import { LeadContext } from 'src/contexts/lead-context'

export const useLead = () => useContext(LeadContext)
