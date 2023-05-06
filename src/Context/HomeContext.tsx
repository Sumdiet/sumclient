import React from "react"
import { useState } from "react"
import HomeContextType from "./HomeContextTypes";
import { UserFinded } from "../ViewModel/UserFinded";

export const HomeContext = React.createContext({} as HomeContextType);

export const GlobalProvider = (props: any) => {
    const [user, setUser] = useState({} as UserFinded);
   
    return (
        <HomeContext.Provider value={{
            user, setUser,
        }}>
            {props.children}
        </HomeContext.Provider>
    )
}