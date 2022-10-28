import { createContext } from "react";


export const ShopContext = createContext()


export const ContextProvider = ({children}) =>{
    const value ={
        exaple: "Hello context"
    }
    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}