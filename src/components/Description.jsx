import H2 from "../assets/descriptionImage/H2.png";
import items from "../assets/descriptionImage/items.png"
const Description = () => {
  return (
    <>
      <div className="block md:hidden flex flex-col items-center space-y-10 mt-12 mb-[10rem]">
        <img src={H2} alt="h2" className="md:w-auto md:h-auto " />
        <p className="text-custom-black font-bold">ما میتوانیم با تیم حرفه ای خود به شما برای تحقق <br />اهدافتان کمک کنیم</p>
        <img src={items} alt=""/>
      </div>
    </>
  );
};

export default Description;
