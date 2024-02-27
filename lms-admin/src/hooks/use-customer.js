import { useContext } from 'react'
import { CustomerContext } from 'src/contexts/customers-context'

export const useCustomer = () => useContext(CustomerContext)
