import {  createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props)=>{

    const backendUrl = process.env.REACT_APP_BACKEND_URL
    const [isLoggedin, setIsLoggedin] = useState(false)

    console.log(backendUrl);


    const value = {
        backendUrl,
        isLoggedin, setIsLoggedin
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

