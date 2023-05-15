import React from "react"
import { useState } from "react"
import HomeContextType from "./HomeContextTypes";

export const HomeContext = React.createContext({} as HomeContextType);

export const GlobalProvider = (props: any) => {
    const [user, setUser] = useState(undefined);
    const [reload, setReload] = useState(false);
   
    return (
        <HomeContext.Provider value={{
            user, setUser, reload, setReload
        }}>
            {props.children}
        </HomeContext.Provider>
    )
}