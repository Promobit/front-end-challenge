import { GlobalStateContext } from "./globalStateContext"
import { useState } from "react"
import React from 'react';

const GlobalState = (props) => {
    
    const [global, setGlobal] = useState('estado global aqui')

    
    return (
        <GlobalStateContext.Provider value={
            {
               global, setGlobal
            }
        }>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState