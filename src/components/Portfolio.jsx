import image1 from "../assets/portfolioImage/image1.png";
import image2 from "../assets/portfolioImage/image2.png";
import image3 from "../assets/portfolioImage/image3.png";
import image4 from "../assets/portfolioImage/image4.png";
import image5 from "../assets/portfolioImage/image5.png";

const Portfolio = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-full md:w-[1217px] mt-[50rem] lg:mt-[20rem]">
          <div className="flex items-center justify-center">
            <div className="hidden md:block">
              <h1 className="text-4xl font-bold">
                نمونه کارهای{" "}
                <span className="text-custom-blue">طراحی سایت</span>
              </h1>
            </div>

            <div className="flex-col block md:hidden text-center">
              <h1 className="text-4xl font-bold">نمونه کارهای</h1>
              <h1 className="text-4xl font-bold text-custom-blue">
                طراحی سایت
              </h1>
            </div>
          </div>
          <div className="w-full overflow-x-auto mt-[4rem] hidden lg:block">
            <table className="border-collapse w-full ">
              <tbody>
                <tr className="border-b">
                  <td>
                    <div className="w-[274px] h-[204px]"></div>
                  </td>
                  <td>
                    <div className="w-[274px] h-[204px]"></div>
                  </td>
                  <td>
                    <div className="w-[274px] h-[204px]">
                      <img src={image1} alt="image1" />
                    </div>
                  </td>
                  <td>
                    <div className="w-[274px] h-[204px]">
                      <img src={image2} alt="image2" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td>
                    <div className="w-[274px] h-[204px] mt-[1rem]">
                      <img src={image3} alt="image3" />
                    </div>
                  </td>
                  <td>
                    <div className="w-[274px] h-[204px] mt-[1rem]">
                      <img src={image4} alt="image4" />
                    </div>
                  </td>
                  <td>
                    <div className="w-[274px] h-[204px] mt-[1rem]"></div>
                  </td>
                  <td>
                    <div className="w-[274px] h-[204px] mt-[1rem]">
                      <img src={image5} alt="image5" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-center mt-[30rem] lg:hidden">
            <div className="flex-col block h-screen">
              <img src={image1} alt="image1" />
              <img src={image2} alt="image2" className="mt-[2rem]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
