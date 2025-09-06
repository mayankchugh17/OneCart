import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";
import { useEffect } from "react";

export const AdminDataContext = createContext();

function AdminContext({ children }) {
  let [adminData, setAdminData] = useState(null);
  let { serverURL } = useContext(authDataContext);

  const getAdmin = async () => {
    try {
      let result = await axios.get(`${serverURL}/admin/getadmin`, {
        withCredentials: true,
      });
      setAdminData(result.data);
      console.log("Admin Mil rha ha :", result.data);
    } catch (error) {
      console.log(error);
      setAdminData(null);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  const value = {
    adminData,
    setAdminData,
    getAdmin,
  };
  return (
    <div>
      <AdminDataContext.Provider value={value}>
        {children}
      </AdminDataContext.Provider>
    </div>
  );
}

export default AdminContext;
