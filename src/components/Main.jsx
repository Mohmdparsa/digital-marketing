import Navbar from "./header/Navbar";
import FirstPage from "./FirstPage";
import FirstPageBoxes from "./FirstPageBoxes";
import TeamImage from "./TeamImage"
const Main = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <FirstPage />
        <FirstPageBoxes/>
        <TeamImage/>
       
      </div>
    </>
  );
};

export default Main;
