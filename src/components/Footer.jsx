import logo from "../assets/footerImage/footer-logo.png";
import copyright from "../assets/footerImage/Copyright.png";
import instagramlogo from "../assets/footerImage/instagram-logo.png";
import telegramLogo from "../assets/footerImage/telegram-logo.png";
import whatsapp from "../assets/footerImage/whatsapp.png";

const Footer = () => {
  return (
    <>
      <hr className="border-t border-custom-blue mt-32" />
      <div className="flex flex-col items-center mt-8 md:flex-row md:justify-between md:items-center w-full max-w-screen-lg mx-auto px-4 mb-[2rem]">
        <div className="mt-8 md:mt-0">
          <img src={logo} alt="logo" className="w-48 hidden md:block" />
        </div>
        <div className="mt-10 md:mt-0">
          <img src={copyright} alt="copyright" className="w-72" />
        </div>
        <div className="flex space-x-4 mt-8 md:mt-0">
          <img src={whatsapp} alt="whatsapp" className="w-10 h-10 ml-[1rem]" />
          <img src={telegramLogo} alt="telegramLogo" className="w-10 h-10" />
          <img src={instagramlogo} alt="instagram" className="w-10 h-10" />
        </div>
      </div>
    </>
  );
};

export default Footer;
