import { useNavigate } from "react-router-dom";
import Logo from "../assets/vcartLogo.png";
import axios from "axios";
import { useContext } from "react";
import { authDataContext } from "../context/AuthContext";

function Nav() {
  const navigate = useNavigate();
  const { serverURL } = useContext(authDataContext);

  const logout = async () => {
    try {
      const result = await axios.get(`${serverURL}/api/logout`, {
        withCredentials: true,
      });
      console.log(`Admin has Logged Out ${result.data.message}`);
      navigate("/login");
    } catch (error) {
      console.log("Error while logout in admin Page", error);
    }
  };
  return (
    <>
      <div className="w-[100vw] h-[70px] bg-[#dcdbdbf8] z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black">
        <div
          className="w-[30%] flex items-center justify-start gap-[10px] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={Logo}
            alt="logo"
            className="w-[30px] h-[40px] object-cover"
          />
          <h1 className="text-[25px] text-[black] font-sans">OneCart</h1>
        </div>
        <button
          onClick={logout}
          className="text-[15px] hover:border-[2px] border-[#89daea] curson-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white"
        >
          Logout
        </button>
      </div>
    </>
  );
}
export default Nav;
