import { useNavigate } from "react-router-dom";
import Logo from "../assets/vcartLogo.png";

function Nav() {
    const navigate = useNavigate();
  return (
    <>
      <div className="w-[100vw] h-[70px] bg-[#dcdbdbf8] z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black">
        <div className="w-[30%] flex items-center justify-start gap-[10px] cursor-pointer" onclick={()=>{navigate("/")}}> 
            <img src={Logo} alt="logo" className="w-[30px] h-[40px] object-cover"/>
            <h1 className="text-[25px] text-[black] font-sans">OneCart</h1>
        </div>
      </div>
    </>
  );
}
export default Nav;
