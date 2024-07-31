import guidaImage from "../assets/guidanceImage/guideImage.png";
import instagramIcon from "../assets/guidanceImage/instagram-icon.png";
import emailIcon from "../assets/guidanceImage/email-icon.png";
import phoneIcon from "../assets/guidanceImage/phone-icon.png";
import instagramId from "../assets/guidanceImage/instagram-id.png";
import email from "../assets/guidanceImage/email.png";
import phoneNumber from "../assets/guidanceImage/phone-number.png";

const Guidance = () => {
  return (
    <div className="flex justify-center items-center mt-[40rem] lg:mt-[15rem]">
      <div className="flex flex-col-reverse lg:flex-row items-center w-full max-w-6xl px-4">
        <div className="text-center lg:text-right lg:mr-10">
          <h1 className="text-5xl font-bold hidden lg:block">
            نیاز به <span className="text-custom-blue">راهنمای</span> بیشتر دارید؟
          </h1>
          <h1 className="text-5xl font-bold block lg:hidden">
            نیاز به <span className="text-custom-blue">راهنمایی</span>
          </h1>
          <h1 className="text-5xl font-bold block lg:hidden mt-[1rem] mr-[2rem] md:mr-0">
            بیشتر دارید؟
          </h1>
          <div className="mt-[2rem]">
            <p className="text-custom-gray hidden lg:block">
              ما همیشه آماده کمک هستیم. کافیه یکی از روش‌های ارتباطی زیر رو انتخاب کنید.
            </p>
            <p className="text-custom-gray hidden lg:block">
              تیم پشتیبانی در سریع‌ترین زمان ممکن با شما ارتباط می‌گیرن.
            </p>
            <div className="block lg:hidden">
              <p>ما همیشه آماده هستیم. کافیه یکی از</p>
              <p>روش‌های ارتباطی زیر را انتخاب کنید</p>
              <p>در سریع‌ترین زمان ممکن با شما ارتباط می‌گیرن</p>
            </div>
          </div>
          <div className="mt-[4rem] flex flex-col items-center lg:items-start">
            <div className="w-[188px] h-[32px] bg-blue-100 mt-[1rem] rounded-2xl flex items-center justify-center">
              <div className="flex">
                <img src={phoneIcon} alt="phone" className="w-[16px] h-[14.48px] ml-[1rem]" />
                <img src={phoneNumber} alt="phoneNumber" className="w-[112px] h-[14.48px]" />
              </div>
            </div>
            <div className="w-[188px] h-[32px] bg-blue-100 mt-[1rem] rounded-2xl flex items-center justify-center">
              <div className="flex">
                <img src={emailIcon} alt="email" className="w-[16px] h-[14.48px] ml-[1rem]" />
                <img src={email} alt="email" className="w-[112px] h-[14.48px]" />
              </div>
            </div>
            <div className="w-[188px] h-[32px] bg-blue-100 mt-[1rem] rounded-2xl flex items-center justify-center">
              <div className="flex">
                <img src={instagramIcon} alt="instagram" className="w-[16px] h-[14.48px] ml-[1rem]" />
                <img src={instagramId} alt="instagramId" className="w-[112px] h-[14.48px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 md:mb-4 lg:mb-0">
          <img
            src={guidaImage}
            alt="guideImage"
            className="w-[320.19px] h-[247px] lg:h-[459px] lg:w-[595px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Guidance;
