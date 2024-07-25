import Navbar from "./header/Navbar";
import FirstPage from "./FirstPage";
import FirstPageBoxes from "./FirstPageBoxes";
const Main = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <FirstPage />
        <FirstPageBoxes/>
      </div>
    </>
  );
};

export default Main;
