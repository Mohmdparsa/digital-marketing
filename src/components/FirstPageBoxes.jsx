const FirstPageBoxes = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center md:justify-around mt-[30rem] md:mt-[5rem] lg:mt-[3rem] gap-4 lg:gap-8">
        <div className="w-[320px] h-[112px] md:w-[391px] md:h-[112px] border-2 p-4 rounded-lg flex flex-col items-center justify-center mb-4 md:mb-0">
          <h2 className="text-custom-black text-xl font-bold">
            بهترین نتیجه در گوگل
          </h2>
          <p className="text-custom-black mt-[0.7rem]">
            سه ماه سیو رایگان محتوای وبلاگ سایت
          </p>
        </div>
        <div className="w-[320px] h-[112px] md:w-[391px] md:h-[112px] border-2 p-4 rounded-lg flex flex-col items-center justify-center mb-4 md:mb-0">
          <h2 className="text-custom-black text-xl font-bold">
            طراحی ساده و کاربرپسند
          </h2>
          <p className="text-custom-black mt-[0.7rem]">
            نمایش در تمامی دستگاه ها: موبایل , دسکتاپ
          </p>
        </div>
        <div className="w-[320px] h-[112px] md:w-[391px] md:h-[112px] border-2 p-4 rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-custom-black text-xl font-bold">
            متمایز بودن از رقبا
          </h2>
          <p className="text-custom-black mt-[0.7rem]">
            طراحی زیبا و چشم نوار با توجه به ترند های روز
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstPageBoxes;
