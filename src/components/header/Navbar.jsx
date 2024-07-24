import { useState } from "react";
import Rectangle from "../../assets/headerImage/Rectangle.png";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="container mx-auto flex justify-between items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none mr-6 mt-6"
          >
            <GiHamburgerMenu className="w-6 h-6" />
          </button>
          <div className="text-white font-semibold space-x-6 mr-10 lg:mr-36 hidden md:flex justify-end gap-8">
            <a href="#" className="text-black hover:text-gray-300 ml-6">
              تیم
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              خدمات
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              نظرات
            </a>
          </div>

          <div className="hidden justify-center items-center md:flex">
            <img src={Rectangle} alt="Logo" className=" object-contain" />
          </div>

          <div className="space-x-6 ml-10 lg:ml-36  font-bold hidden md:flex justify-end gap-8">
            <a href="#" className="text-black hover:text-gray-300 ml-6">
              تخفیف
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              نمونه کارها
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              ارتباط
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
