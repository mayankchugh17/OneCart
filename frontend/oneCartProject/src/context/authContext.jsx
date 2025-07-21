import { createContext } from 'react';

export const AuthDataContext = createContext();
function AuthContextProvider({ children }) {
    const serverURL = "http://localhost:8080";
    return ( 
        <>
            <AuthDataContext.Provider value={{serverURL}}>
                {children}
            </AuthDataContext.Provider>
        </>
     );
}

export default AuthContextProvider;    ;