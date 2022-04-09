import {createContext, useContext} from 'react'
import useInitialState from '@hooks/useInitialState'

import {initialState} from '@hooks/useInitialState'

export const AppContext = createContext({})

export const AppWrapper = ({ children }) => {
  return (
    <AppContext.Provider value={useInitialState()}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if(!context){
    console.error('There is not AppContext');
  }
  return context
}
