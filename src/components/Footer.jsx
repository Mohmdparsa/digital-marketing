import logo from "../assets/footerImage/footer-logo.png";
import copyright from "../assets/footerImage/Copyright.png";
import instagramlogo from "../assets/footerImage/instagram-logo.png";
import telegramLogo from "../assets/footerImage/telegram-logo.png";
import whatsapp from "../assets/footerImage/whatsapp.png";

const Footer = () => {
  return (
    <>
      <hr className="border-t border-custom-blue mt-[8rem]" />
      <div className="w-[360px] h-[140px] md:w-[1366px] md:h-[100px] flex flex-col md:flex-row items-center md:items-start mt-[2rem]">
        <div className="mt-[2rem] mr-[5rem]">
          <img
            src={logo}
            alt="logo"
            className="w-[187px] h-[32px] hidden md:block"
          />
        </div>
        <div className="mt-[2.5rem] mr-[5rem] md:mr-[15rem]">
          <img src={copyright} alt="copyright" className="w-[298px] h-[24px]" />
        </div>
        <div className="flex w-[168px] h-[40px] mt-[2rem] mr-[8rem] md:mr-[15rem]">
          <img src={whatsapp} alt="whatsapp" className="w-[40px] h-[40px]" />
          <img
            src={telegramLogo}
            alt="telegranLogo"
            className="w-[40px] h-[40px]"
          />
          <img
            src={instagramlogo}
            alt="instagram"
            className="w-[40px] h-[40px]"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
