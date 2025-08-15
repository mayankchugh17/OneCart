import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";
import { useEffect } from "react";

export const adminDataContext = createContext();

function AdminContext({ children }) {
  let [adminData, setAdminData] = useState(null);
  let { serverURL } = useContext(authDataContext);

  const getAdmin = async () => {
    try {
      let result = await axios.get(`${serverURL}/getadmin`, {
        withCredentials: true,
      });
      setAdminData(result.data);
    } catch (error) {
      console.log(error);
      setAdminData(null);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  const value = {
    adminData, setAdminData, getAdmin
  }
  return (
    <div>
      <adminDataContext.Provider value={value}>
        {children}
      </adminDataContext.Provider>
    </div>
  );
}

export default AdminContext;
