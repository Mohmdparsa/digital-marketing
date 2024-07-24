import Rectangle from "../../assets/headerImage/Rectangle.png";
const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-semibold space-x-6 mr-10 lg:mr-36">
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

          <div className="flex justify-center items-center">
            <img src={Rectangle} alt="Logo" className=" object-contain" />
          </div>

          <div className="space-x-6 ml-10 lg:ml-36">
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
