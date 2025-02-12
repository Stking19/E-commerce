import React, { createContext } from 'react'

export const proContext = createContext();
const ContextProvider = ({children}) => {
  return (
    <div>
        <proContext.Provider 
        value={{
            data: 9,
            spring: 4
            }}>
            {children}
        </proContext.Provider>
    </div>
  )
}

export default ContextProvider