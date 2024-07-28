import teamimagedesk from "../assets/teamimage/team-image-desk.png";
import teamimagemobile from "../assets/teamimage/team-image-mobile.png";

const TeamImage = () => {
  return (
    <div className=" flex flex-col  lg:flex-row justify-center items-center mt-[10rem] lg:mt-2 ">
      <div >
        <img
          src={teamimagedesk}
          alt="teamimagedesk"
          className="hidden md:block lg:block md:mr-[10rem] lg:-mr-[5rem] "
        />
        <img
          src={teamimagemobile}
          alt=""
          className="block md:hidden w-[319px] h-[221px]"
        />
      </div>
      <div className=" flex-col mr-[10rem] lg:-mr-[32rem]  hidden md:block mb-[10rem] lg:mb-0">
        <div >
          <h1 className="text-5xl font-bold -mt-[5rem]">
            {" "}
            <apan className="text-custom-blue">تیم متخصص </apan>با
          </h1>
          <h1 className="text-5xl font-bold">توانایی منحصر بفرد</h1>
        </div>
        <div>
          <p className="text-custom-black text-xl mt-[2rem]">
            ما میتوانیم با تیم حرفه ای خود به شما برای تحقق اهدافتان کمک کنیم
          </p>
        </div>
        <div className="mr-[1rem] mt-[2rem]">
            <ul className="list-disc marker:text-red-500" >
                <li className="mt-[0.5rem] text-lg">خلاقیت : می توانیم راه حل های جدید و خلاقانه ارایه بدیم</li>
                <li className="mt-[0.5rem] text-lg">دانش : با دانش روز دنیا توانایی حل هرگونه مسله رو داریم</li>
                <li className="mt-[0.5rem] text-lg">همکاری : کار تیمی برای به نتیجه رسیدن در سریعترین زمان</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamImage;
