import React from "react";
import image1 from "../assets/firstPageImage/image1.png";

const FirstPage = () => {
  return (
    <div className="container h-[722.7px] w-full flex flex-col md:flex-row -mt-20 justify-center items-center mr-0 md:mr-[2.5rem] lg:mr-[1rem]">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="order-2 md:order-1 mt-[10rem] md:mt-[6rem] rounded-lg mx-auto md:w-[35rem] w-full flex flex-col lg:flex-col items-center lg:items-end">
          <div className="hidden lg:block  mb-2 mx-auto w-[595px] h-[120px]">
            <h1 className="text-5xl font-bold">می خوای یه سایت </h1>
            <h1 className="text-5xl font-bold">
              با <span className="text-custom-orange">طراحی به روز </span>داشته
              باشی{" "}
            </h1>
          </div>
          <div className="block lg:hidden  mx-auto lg:mr-[2rem] w-[320px] h-[192px]">
            <h1 className="text-4xl font-bold mr-[1rem]">می خوای یه سایت</h1>
            <h1 className="text-4xl font-bold mr-[2rem]">
              {" "}
              <span className="text-custom-orange">طراحی به روز </span>با{" "}
            </h1>
            <h1 className="text-4xl font-bold mr-[3.6rem]">داشته باشی</h1>
          </div>

          <div className="hidden lg:block t mb-2 ml-[3rem] w-[514px] h-[54px]">
            <p>
              آژانس طراحی فیوچر به همراه تیمی متخصص در طراحی و توسعه وب سایت با
            </p>
            <p>سال ها تجربه در این زمینه در خدمت شماست</p>
          </div>
          <div className="block lg:hidden mb-2  mx-auto w-[320px] h-[87px]">
            <p>آژانس طراحی فیوچر به همراه تیمی متخصص در</p>
            <p> طراحی و توسعه وب سایت با سال ها تجربه در این</p>
            <p>زمینه در خدمت شماست</p>
          </div>

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
