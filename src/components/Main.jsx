import {
  Navbar,
  FirstPage,
  FirstPageBoxes,
  TeamImage,
  Description,
  Services,
  ViewCarousel,
  OfferSection,
  Portfolio,
  Guidance,
  Footer,
} from "./index.js";
const Main = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <FirstPage />
        <FirstPageBoxes />
        <TeamImage />
        <Description />
        <Services />
        <ViewCarousel />
        <OfferSection />
        <Portfolio />
        <Guidance />
        <Footer />
      </div>
    </>
  );
};

export default Main;
