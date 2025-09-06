import { useState, useContext } from "react";
import VcartLogo from "../assets/vcartLogo.png";
import { IoEyeOutline, IoEyeOffSharp } from "react-icons/io5";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { AdminDataContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  
  const { serverURL } = useContext(authDataContext);
  
  let { adminData, getAdmin } = useContext(AdminDataContext);

  const navigate = useNavigate();

  const AdminLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${serverURL}/admin/adminlogin`,{email,password}, {withCredentials:true});
      console.log(result.data);
      getAdmin();
      if(result) navigate("/")
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col justify-start items-center  ">
        <div className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer">
          <img src={VcartLogo} className="w-[40px]" alt="Logo" />
          <h1 className="text-[22px] font-sans">One Cart</h1>
        </div>
        <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
          <span className="text-[30px] font-semibold">Login Page</span>
          <span className="text-[20px]">
            Welcome to OneCart, Apply to Admin Login
          </span>
        </div>
        <div className="max-w-[600px] w-[90%] my-4 h-[400px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
          <form
            action=""
            onSubmit={AdminLogin}
            className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
          >
            <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
              <input
                className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
                placeholder="Enter Email"
                required
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <input
                type={show ? "text" : "password"}
                className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
                placeholder="Enter Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              {!show && (
                <IoEyeOutline
                  className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]"
                  onClick={() => {
                    setShow((prev) => !prev);
                  }}
                />
              )}
              {show && (
                <IoEyeOffSharp
                  className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]"
                  onClick={() => {
                    setShow((prev) => !prev);
                  }}
                />
              )}
              <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center  mt-[20px] text-[17px] font-semibold ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
