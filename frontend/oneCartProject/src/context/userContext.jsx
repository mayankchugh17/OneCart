import { createContext } from 'react';
import { useState, useContext, useEffect } from 'react';
import { AuthDataContext } from './AuthContext';
import axios from 'axios';

export const userDataContext = createContext();

function UserContext({children})
{
    let [userData, setUserData] = useState("");
    let {serverURL} = useContext(AuthDataContext);
    
    const getCurrentUser = async () => {
        try { 
            let response = await axios.get(`${serverURL}/user/getcurrentuser`, {
                withCredentials: true,
            });
            setUserData(response.data);
            // console.log("Current user data fetched successfully:", response.data);
        }
        catch (error) {
            setUserData(null);
            console.error("Error fetching current user:", error);   
        }
    }
    
    useEffect(()=>{
        getCurrentUser();
    }, []);
    
    let value = {userData, setUserData, getCurrentUser};

    return(
        <div>
            <userDataContext.Provider value={value}>
                {children}
            </userDataContext.Provider>
        </div>
    );
}

export default UserContext;