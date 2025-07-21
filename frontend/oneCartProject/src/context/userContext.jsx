import { createContext } from 'react';
export const userDataContext = createContext();



let value = {};

function userContext({children})
{
    return(
        <div>
            <userDataContext.Provider value={value}>
                {children}
            </userDataContext.Provider>
        </div>
    );
}

export default userContext;