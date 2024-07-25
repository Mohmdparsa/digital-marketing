import circle1 from "../assets/serviceImage/circle1.png";
import circle2 from "../assets/serviceImage/circle2.png";
import circle3 from "../assets/serviceImage/circle3.png";

const Services = () => {
  const cardsData = [
    {
      title: "طراحی به روز",
      description:
        "طراحی گرافیکی زیبا , جذاب و کاربروپسند برای جذب هرچه بیشتر کاربران با هر سلیقه ای",
      imageUrl: circle1,
    },
    {
      title: "سيو محتوا",
      description:
        "بهینه سازی محتوای وب سایت به منظور بهبود رتبه محتوا در نتایج جست و جوی گوگل",
      imageUrl: circle2,
    },
    {
      title: "کدنویسی بهینه",
      description:
        "کدنویسی کارآمد , قابل نگهداری و قابل توسعه سایت  برای گرفتن نتیجه مطلوب",
      imageUrl: circle1,
    },
    {
      title: "سرعت عالی",
      description:
        "انتخاب هاستینگ مناسب برای بارگرذاری محتوا در سریعترین زمان ممکن برای کاربران",
      imageUrl: circle3,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap  justify-center gap-4 p-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row  items-center rounded-lg overflow-hidden max-w-sm mx-auto w-[230px] h-[300px]"
          >
            <img
              src={card.imageUrl}
              alt=""
              className=" h-50 object-cover w-[164px] h-[147px]"
            />
            <div className="p-6 flex flex-col items-center">
              <h2 className="w-[230px] h-[32px] font-bold text-gray-800 text-center">
                {card.title}
              </h2>
              <p className="mt-2 w-[224px] h-[81px]  text-gray-600 text-center">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
