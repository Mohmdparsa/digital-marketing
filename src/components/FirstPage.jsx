import React from "react";
import image1 from "../assets/firstPageImage/image1.png";
import H1desk from "../assets/firstPageImage/H1desk.png";
import Pdesk from "../assets/firstPageImage/Pdesk.png";
import pmobile from "../assets/firstPageImage/Pmobile.png";
import h1mobile from "../assets/firstPageImage/H1mobile.png";

const FirstPage = () => {
  return (
    <div className="container h-[722.7px] w-full flex flex-col md:flex-row -mt-20 justify-center items-center mr-0 md:mr-[5rem] lg:mr-[1rem]">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="order-2 md:order-1 mt-[10rem] md:mt-[6rem] rounded-lg mx-auto md:w-[35rem] w-full flex flex-col lg:flex-col items-center lg:items-end">
          <img
            className="block lg:hidden mb-2 mx-auto lg:mr-[2rem] w-[320px] h-[192px]"
            src={h1mobile}
            alt="Mobile Heading"
          />

          <img
            className="hidden lg:block text-4xl mb-2 mx-auto w-[595px] h-[120px]"
            src={H1desk}
            alt="Desktop Heading"
          />

          <img
            className="block lg:hidden mb-2 mt-[7rem] mx-auto w-[320px] h-[87px]"
            src={pmobile}
            alt="Mobile Paragraph"
          />

          <img
            className="hidden lg:block text-4xl mb-2 mt-[7rem] mx-auto w-[514px] h-[54px]"
            src={Pdesk}
            alt="Desktop Paragraph"
          />

          <button className="w-[320px] h-[48px] md:w-[157px] mt-[3rem] text-white bg-custom-orange rounded-lg mx-auto lg:mr-0 lg:self-end">
            اطلاعات بیشتر
          </button>
        </div>

        <div className="order-1 md:order-2 flex justify-center items-center mt-[35rem] md:mt-28 w-[370.3px] h-[370.3px] md:w-[689.98px] md:h-[689.98px]">
          <img src={image1} alt="Main" className="w-full md:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
