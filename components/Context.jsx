import { useState, createContext } from 'react'

export const Context = createContext()

export const ContextProvider = ({children}) => {


    const [ roundPopup, setRoundPopup ] = useState(false)


    return (
        <Context.Provider value={ { roundPopup, setRoundPopup }} >
            {children}
        </Context.Provider>
 )
}