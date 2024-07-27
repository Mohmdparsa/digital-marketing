import guidaImage from "../assets/guidanceImage/guideImage.png";
import instagramIcon from "../assets/guidanceImage/instagram-icon.png";
import emailIcon from "../assets/guidanceImage/email-icon.png";
import phoneIcon from "../assets/guidanceImage/phone-icon.png";
import instagramId from "../assets/guidanceImage/instagram-id.png";
import email from "../assets/guidanceImage/email.png";
import phoneNumber from "../assets/guidanceImage/phone-number.png";

const Guidance = () => {
  return (
    <>
      <div className="mt-[45rem] md:mt-[40rem] lg:mt-[20rem]">
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row w-[321px] md:w-[1208px] h-auto  mr-[4rem] md:mr-[13rem] lg:mr-[5rem]">
          <div>
            <div>
              <h1 className="text-5xl font-bold hidden lg:block">
                نیاز به <span className="text-custom-blue">راهنمای</span> بیشتر دارید؟
              </h1>
              <h1 className="text-5xl font-bold block lg:hidden">
                نیاز به <span className="text-custom-blue">راهنمایی</span>
              </h1>
              <h1 className="text-5xl font-bold block lg:hidden mr-[2rem] md:mr-0">
                بیشتر دارید؟
              </h1>
            </div>
            <div className="flex flex-col mt-[2rem]">
              <p className="text-custom-gray hidden lg:block">
                ما همیشه آماده کمک هستیم . کافیه یکی از روش های ارتباطی زیر رو انتخاب کنید
              </p>
              <p className="text-custom-gray hidden lg:block">
                تیم پشتیبانی در سریعترین زمان ممکن با شما ارتباط می گیرن
              </p>
              <div className="flex flex-col">
                <p className="block lg:hidden">
                  ما همیشه آماده هستیم. کافیه یکی از
                </p>
                <p className="block lg:hidden">
                  روش های ارتباطی زیر را انتخاب کنید
                </p>
                <p className="block lg:hidden">
                  در سریعترین زمان ممکن با شما ارتباط می گیرن
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-[4rem] mr-[3rem] md:mr-[4rem] lg:mr-0">
              <div className="w-[188px] h-[32px] bg-blue-100 mt-[1rem] rounded-2xl flex items-center justify-center">
                <div className="flex">
                  <img src={phoneIcon} alt="phone" className="w-[16px] h-[14.48px] ml-[1rem]" />
                  <img src={phoneNumber} alt="phoneNumber" className="w-[112px] h-[14.48px]" />
                </div>
              </div>
              <div className="w-[188px] h-[32px] bg-blue-100 mt-[1rem] rounded-2xl flex items-center justify-center">
                <div className="flex">
                  <img src={emailIcon} alt="phone" className="w-[16px] h-[14.48px] ml-[1rem]" />
                  <img src={email} alt="phoneNumber" className="w-[112px] h-[14.48px]" />
                </div>
              </div>
              <div className="w-[188px] h-[32px] bg-blue-100 mt-[1rem] rounded-2xl flex items-center justify-center">
                <div className="flex">
                  <img src={instagramIcon} alt="phone" className="w-[16px] h-[14.48px] ml-[1rem]" />
                  <img src={instagramId} alt="phoneNumber" className="w-[112px] h-[14.48px]" />
                </div>
              </div>
            </div>
          </div>
          <div>
              <img
            src={guidaImage}
            alt="guideImage"
            className=" w-[320.19px]  h-[247px] lg:h-[459px] lg:w-[595px]   mb-4 md:mb-4 lg:mb-0"
          /> 
          </div>

       
        </div>
      </div>
    </>
  );
};

export default Guidance;
