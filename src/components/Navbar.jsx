import { useState } from "react";
import Rectangle from "../assets/headerImage/Rectangle.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center w-full">
      <nav className="bg-white z-50 w-[744px] h-[50px] flex items-center justify-center">
        <div className="flex justify-between items-center w-full h-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none mr-6"
          >
            <GiHamburgerMenu className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-center">
            <div className="text-white font-semibold space-x-6 hidden md:flex gap-8">
              <a href="#" className="text-black hover:text-gray-300 ml-6 w-[21px] h-[32px] text-sm">
                تیم
              </a>
              <a href="#" className="text-black hover:text-gray-300 w-[46px] h-[32px] text-sm">
                خدمات
              </a>
              <a href="#" className="text-black hover:text-gray-300 w-[39px] h-[32px] text-sm">
                نظرات
              </a>
            </div>
          </div>

          <div className="flex">  <div className="hidden md:block justify-center items-center w-[198px]">
            <img src={Rectangle} alt="Logo" className="object-contain h-[50px] " />
          </div></div>

        

          <div className="hidden md:flex space-x-6 ml-10 font-bold justify-end gap-8">
            <a href="#" className="text-black hover:text-gray-300 ml-6 mr-[2rem] w-[45px] h-[32px] text-sm">
              تخفیف
            </a>
            <a href="#" className="text-black hover:text-gray-300 w-[69px] h-[32px] text-sm">
              نمونه کارها
            </a>
            <a href="#" className="text-black hover:text-gray-300 w-[35px] h-[32px] text-sm">
              ارتباط
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
