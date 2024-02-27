import { createContext, useContext, useEffect, useReducer, useRef } from 'react'
import PropTypes from 'prop-types'

const HANDLERS = {
  CustomerData: 'CustomerData',
}

const initialState = {
  data: null,
}

const handlers = {
  [HANDLERS.CustomerData]: (state, action) => {
    const data = action.payload

    return {
      ...state,
      data,
    }
  },
}

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

// The role of this context is to propagate customer state through the App tree.

export const CustomerContext = createContext()

export const CustomerProvider = props => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initialState)

  const CustomerList = async data => {
    dispatch({
      type: HANDLERS.CustomerData,
      payload: data,
    })
  }

  return (
    <CustomerContext.Provider
      value={{
        ...state,
        CustomerList,
      }}
    >
      {children}
    </CustomerContext.Provider>
  )
}

CustomerProvider.propTypes = {
  children: PropTypes.node,
}

export const CustomerConsumer = CustomerContext.Consumer

export const useCustomerContext = () => useContext(CustomerContext)
