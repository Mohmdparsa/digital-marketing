import Navbar from "./header/Navbar";
import FirstPage from "./FirstPage";
import FirstPageBoxes from "./FirstPageBoxes";
import TeamImage from "./TeamImage"
import Description from "./Description"
import Services from "./Services"
import ViewCarousel from "./ViewCarousel"
import OfferSection from "./OfferSection"
import Portfolio from "./Portfolio";
import Guidance from "./Guidance";
import Footer from "./Footer";
const Main = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <FirstPage />
        <FirstPageBoxes/>
        <TeamImage/>
        <Description/>
        <Services/>
        <ViewCarousel/>
        <OfferSection/>
        <Portfolio/>
        <Guidance/>
        <Footer/>
       
      </div>
    </>
  );
};

export default Main;
