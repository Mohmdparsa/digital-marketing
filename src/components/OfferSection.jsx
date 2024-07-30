
import Timer from "./Timer";
const OfferSection = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center mt-[7rem] md:mt-10">
        <div className="w-[321px] h-[596px] md:w-[766px] md:h-[392px]">
          <div className="w-[691px] h-[64px]   items-center justify-center hidden md:block mr-[4rem]">
            {" "}
            <h1 className="text-4xl font-bold ml-[1rem] mr-[1rem] md:ml-0 md:mr-0">
              <span className="text-custom-orange">تخفیف طراحی سایت </span>برای
              مدت محدود
            </h1>
          </div>
          <div className="w-[320px] h-[112px]  items-center justify-center block md:hidden ">
            <h1 className="text-4xl font-bold ml-[1rem]  md:ml-0 md:mr-0 w-[320px]">
              <span className="text-custom-orange">تخفیف طراحی سایت </span>
              <br />
              <span className="mr-[2rem]">برای مدت محدود</span>
            </h1>
          </div>
          <div className="w-[321px] h-[72px] md:w-[534px] md:h-[48px]  flex items-center justify-center flex-col mr-0 md:mr-[5rem] mt-10 md:mt-[2rem]">
            <p className="text-custom-gray text-sm">
              برای استفاده از تخفیف ویژه طراحی سایت فقط تا قبل از اتمام زمان زیر
              فرصت دارید.{" "}
            </p>
            <p className="text-custom-gray text-sm">
              اطلاعات خواسته شده رو وارد کنید و منتظر تماس ما باشید.
            </p>
          </div>
          <Timer />
          <div className="w-[320px] h-[48px] md:w-[766px] md:h-[48px] flex-col">
            <input
              type="text"
              className="w-[320px] h-[48px] md:w-[289px] md:h-[48px] border-custom-gray border-2 rounded-lg ml-4 mt-7 md:mt-[5rem]"
              placeholder="شماره تماس"
            />
            <input
              type="text"
              className="w-[320px] h-[48px] md:w-[290px] md:h-[48] border-custom-gray border-2 rounded-lg ml-4 mt-7 md:mt-[5rem]"
              placeholder="نام شما"
            />
            <button className="w-[320px] h-[48px] md:w-[155px] md:h-[48px] bg-custom-orange rounded-lg text-white mt-7 md:mt-[5rem]">
              دریافت تخفیف
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferSection;
