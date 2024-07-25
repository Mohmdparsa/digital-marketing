import image1 from "../assets/firstPageImage/image1.png";
import H1desk from "../assets/firstPageImage/H1desk.png";
import Pdesk from "../assets/firstPageImage/Pdesk.png";
import pmobile from "../assets/firstPageImage/Pmobile.png";
import h1mobile from "../assets/firstPageImage/H1mobile.png";
const FirstPage = () => {
  const isLargeScreen = window.innerWidth >= 400;
  const isSmallScreen = window.innerWidth >= 360;
  return (
    <>
      <div className="container h-[722.7px] w-full flex flex-col md:flex-row -mt-20 justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="order-2 md:order-1 mt-[10rem] md:mt-[6rem] rounded-lg mx-auto md:w-[35rem] w-full">
            {isSmallScreen && (
              <img
                className="block lg:hidden mb-2 mx-auto lg:mr-[2rem]"
                src={h1mobile}
                alt="Image 2"
              />
            )}
            {isLargeScreen && (
              <img
                className="hidden lg:block text-4xl mb-2 mx-auto"
                src={H1desk}
                alt="Image 1"
              />
            )}
            {isSmallScreen && (
              <img
                className="block lg:hidden mb-2 mt-[7rem] mx-auto"
                src={pmobile}
                alt="Image 2"
              />
            )}
            {isLargeScreen && (
              <img
                className="hidden lg:block text-4xl mb-2 mt-[7rem] mx-auto"
                src={Pdesk}
                alt="Image 1"
              />
            )}
            <button className="w-[157px] h-[48px] mt-[3rem] text-white bg-custom-orange rounded-lg mx-auto">
              اطلاعات بیشتر
            </button>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center mt-[35rem] md:mt-28 w-full md:w-auto">
            <img src={image1} alt="" className="w-full md:w-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
