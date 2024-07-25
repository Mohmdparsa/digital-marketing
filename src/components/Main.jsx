import Navbar from "./header/Navbar";
import FirstPage from "./FirstPage";
import FirstPageBoxes from "./FirstPageBoxes";
import TeamImage from "./TeamImage"
import Description from "./Description"
const Main = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <FirstPage />
        <FirstPageBoxes/>
        <TeamImage/>
        <Description/>
       
      </div>
    </>
  );
};

export default Main;
