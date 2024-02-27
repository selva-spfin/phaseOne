import { createContext, useContext, useEffect, useReducer, useRef } from 'react'
import PropTypes from 'prop-types'

const HANDLERS = {
  LeadData: 'LeadData',
}

const initialState = {
  data: null,
}

const handlers = {
  [HANDLERS.LeadData]: (state, action) => {
    const data = action.payload

    return {
      ...state,
      data,
    }
  },
}

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

// The role of this context is to propagate Lead state through the App tree.

export const LeadContext = createContext()

export const LeadProvider = props => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initialState)

  const LeadList = async data => {
    dispatch({
      type: HANDLERS.LeadData,
      payload: data,
    })
  }

  return (
    <LeadContext.Provider
      value={{
        ...state,
        LeadList,
      }}
    >
      {children}
    </LeadContext.Provider>
  )
}

LeadProvider.propTypes = {
  children: PropTypes.node,
}

export const LeadConsumer = LeadContext.Consumer

export const useLeadContext = () => useContext(LeadContext)
