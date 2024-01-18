import { useState, createContext } from 'react'

export const Context = createContext()

export const ContextProvider = ({children}) => {


    const [ roundPopup, setRoundPopup ] = useState(false)
    const initialState = { user_name:'', email:'' }
    const [ roundData, setRoundData ] = useState(initialState)


    return (
        <Context.Provider value={ { roundPopup, setRoundPopup, roundData, setRoundData }} >
            {children}
        </Context.Provider>
 )
}