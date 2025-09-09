import Nav from "../component/Nav.jsx";
import Sidebar from "../component/Sidebar.jsx";
import upload from "../assets/upload.jpg"
import { useState } from "react";

function AddProduct() {
    let [image1, setImage1] = useState(null);
    let [image2, setImage2] = useState(null);
    let [image3, setImage3] = useState(null);
    let [image4, setImage4] = useState(null);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] overflow-x-hidden relative">
        <Nav />
        <Sidebar />

        <div className="w-[82%] h-[100%] flex items-center justify-start overflow-x-hidden right-0 absolute">
            <form action="" className=" w-[100%] md:w-[90%] h-[100%] mt-[70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px] ">
                <div className="w-[400px] h-[50px] text-[25px] md:text-[40px] text-white py-[2rem]">Add Product Page</div>
                <div className="w-[80%] h-[130px] flex items-start justify-center flex-col mt-[20px] gap-[10px]">
                    <p className="text-[20px] md:text-[25px] font-semibold">Upload Image</p>
                    <div className="w-[100%] h-[100%] flex items-center justify-start">
                        <label htmlFor="image1" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7] ">
                            <img src={!image1 ? upload : URL.createObjectURL(image1)} className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px] "  />   {/* URL.createObjectURL(image1) method is used for creating URL of particular Image */ }
                            <input type="file" id="image1" hidden onChange={(e)=>{setImage1(e.target.files[0])}} />
                        </label>
                        <label htmlFor="image2" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7] ">
                            <img src={!image2 ? upload : URL.createObjectURL(image2)} className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px] "  />   {/* URL.createObjectURL(image1) method is used for creating URL of particular Image */ }
                            <input type="file" id="image2" hidden onChange={(e)=>{setImage2(e.target.files[0])}} />
                        </label>
                        <label htmlFor="image3" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7] ">
                            <img src={!image3 ? upload : URL.createObjectURL(image3)} className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px] "  />   {/* URL.createObjectURL(image1) method is used for creating URL of particular Image */ }
                            <input type="file" id="image3" hidden onChange={(e)=>{setImage3(e.target.files[0])}} />
                        </label>
                        <label htmlFor="image4" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7] ">
                            <img src={!image4 ? upload : URL.createObjectURL(image4)} className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px] "  />   {/* URL.createObjectURL(image1) method is used for creating URL of particular Image */ }
                            <input type="file" id="image4" hidden onChange={(e)=>{setImage4(e.target.files[0])}} />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default AddProduct;
