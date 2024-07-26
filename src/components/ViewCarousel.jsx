import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import circle1 from "../assets/serviceImage/circle1.png";

const ViewCarousel = () => {
  const slides = [
    {
      comment:
        "از همکاری با آژانس شما بسیار راضی هستم. تیم طراحی شما بسیار حرفه ای و با تجربه هستند. وب سایت من بسیار جذاب و کاربرپسند است . بازدیدکنندگان به راحتی می توانند اطلاعات مورد نظر خود را در آن پیدا کنند. همچنین وب سایت من  به خوبی با دستگاه های مختلف سازگار است.",
      name: "مونا صالحی",
      job: "پزشک متخصص",
      image: circle1,
    },
    {
      comment:
        "تیم طراحی شما بسیار حرفه ای و با تجربه هستند. وب سایت من بسیار جذاب و کاربرپسند است .",
      name: "علی صادقی",
      job: "عکاس",
      image: circle1,
    },
    {
      comment: "از همکاری با شما بسیار خرسندم",
      name: "رضا محمدی",
      job: "نقاش",
      image: circle1,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-5">
            <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between w-full max-w-[320px] md:max-w-[1206px] h-[520px] md-auto mx-auto ">
              <div className="flex-1 mb-5 md:mb-0 text-center md:text-right w-full h-auto mr-0 md:mr-[4rem] mt-[3rem] md:mt-0">
                <h2>{slide.comment}</h2>
                <div className="flex flex-col">
                  <span className=" text-blue-700 text-2xl font-bold mt-[1rem] md:mt-2">
                    {slide.name}
                  </span>
                  <span className="mt-[1rem] md:mt-0">{slide.job}</span>
                </div>
              </div>

              <div className="ml-10 md:ml-0 mt-5 md:mt-0 mr-[2rem] md:mr-2">
                <img
                  src={slide.image}
                  alt={slide.image}
                  className=" w-[163px] h-[163px] md:w-[229px] md:h-[229px] "
                  style={{ margin: "0", padding: "0" }}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ViewCarousel;
