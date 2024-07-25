import Navbar from "./header/Navbar";
import FirstPage from "./FirstPage";
import FirstPageBoxes from "./FirstPageBoxes";
import TeamImage from "./TeamImage"
import Description from "./Description"
import Services from "./Services"
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
       
      </div>
    </>
  );
};

export default Main;
