import React from "react"
import { useState } from "react"
import HomeContextType from "./HomeContextTypes";
import useDate from "../Utils/useData";

export const HomeContext = React.createContext({} as HomeContextType);

export const GlobalProvider = (props: any) => {
    const [user, setUser] = useState(undefined);
    const [reload, setReload] = useState(false);
    const [date, setDate] = useState(useDate());
   
    return (
        <HomeContext.Provider value={{
            user, setUser, reload, setReload, date, setDate
        }}>
            {props.children}
        </HomeContext.Provider>
    )
}