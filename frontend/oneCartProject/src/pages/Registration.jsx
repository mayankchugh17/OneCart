import React from "react";
import VcartLogo from "/Images/vcartLogo.png";
import GoogleLogo from "/Images/google.webp"; // Assuming you have a Google logo image in the Images folder
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
function Registration() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col justify-start items-center ">
        <div
          className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={VcartLogo} className="w-[40px]" alt="Logo" />
          <h1 className="text-[22px] font-sans">One Cart</h1>
        </div>
        <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
          <span className="text-[30px] font-semibold">Registration Page</span>
          <span className="text-[20px]">
            Welcome to OneCart, Place your order
          </span>
        </div>
        <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
          <form
            action=""
            className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
          >
            <div className="w-[90%]  h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer">
              <img className="w-[20px]" src={GoogleLogo} alt="" />
              Registration with Google
            </div>
            <div className="w-[100%] h-[20px] flex item-center justify-center gap-[10px]">
              <div className="w-[40%] h-[1px] bg-[#96969635] mt-3"></div>OR
              <div className="w-[40%] h-[1px] bg-[#96969635] mt-3"></div>
            </div>
            <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
              <input
                className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
                placeholder="Enter Username"
                required
              />
              <input
                className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
                placeholder="Enter Email"
                required
              />
              <input
                className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
                placeholder="Enter Password"
                required
              />
              <IoEyeOutline className="w-[20px] h-[20px] cursor-pointer absolute right-[5%]" />
              <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center  mt-[20px] text-[17px] font-semibold ">
                Create Account
              </button>
              <p className="flex gap-[10px] text-[17px]">
                You have any account?
                <span
                  className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
