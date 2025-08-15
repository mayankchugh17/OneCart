import { createContext } from "react";

export const authDataContext=createContext();
export function AuthContextProvider({ children })
{
    const serverURL = "http://localhost:8080";
    let value = {
        serverURL
    }
    return(
        <>
            <authDataContext.Provider value={value}>
                {children}
            </authDataContext.Provider>
        </>
    );
}

