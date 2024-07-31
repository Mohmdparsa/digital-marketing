const Description = () => {
  return (
    <>
      <div className="block md:hidden flex flex-col items-center space-y-10 mt-12 mb-[10rem]">
        <div className="flex flex-col itemn-center justify-center">
          <h1 className="text-3xl mr-[3rem] font-bold">
            <span className="text-custom-blue">تیم متخصص </span>با
          </h1>
          <h1 className="text-3xl font-bold">توانایی های منحصر بفرد</h1>
        </div>
        <p className="text-custom-black font-bold">
          ما میتوانیم با تیم حرفه ای خود به شما برای تحقق <br />
          اهدافتان کمک کنیم
        </p>

        <div className="mr-[1rem] mt-[2rem]">
          <ul className="list-disc marker:text-red-500">
            <li className="mt-[0.5rem] text-md">
              خلاقیت : می توانیم راه حل های جدید و خلاقانه ارایه بدیم
            </li>
            <li className="mt-[0.5rem] text-md">
              دانش : با دانش روز دنیا توانایی حل هرگونه مسله رو داریم
            </li>
            <li className="mt-[0.5rem] text-md">
              همکاری : کار تیمی برای به نتیجه رسیدن در سریعترین زمان
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Description;
