import React, { useState, useEffect } from 'react';

const Timer = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 20); // 20 days later

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center mt-[2rem]">
      <div className="text-center bg-white p-4 rounded-lg shadow-lg w-full max-w-full lg:max-w-[714px] lg:h-[128px] flex flex-col justify-center">
        <div className="text-2xl lg:text-6xl font-bold text-gray-800 mb-2 lg:mb-0 flex justify-center items-center space-x-2 lg:space-x-4">
          <div className="flex flex-col items-center">
            <div className="w-16 lg:w-24">{timeLeft.days || '0'}</div>
            <span className="text-sm lg:text-lg text-gray-500">روز</span>
          </div>
          <div>:</div>
          <div className="flex flex-col items-center">
            <div className="w-16 lg:w-24">{timeLeft.hours || '0'}</div>
            <span className="text-sm lg:text-lg text-gray-500">ساعت</span>
          </div>
          <div>:</div>
          <div className="flex flex-col items-center">
            <div className="w-16 lg:w-24">{timeLeft.minutes || '0'}</div>
            <span className="text-sm lg:text-lg text-gray-500">دقیقه</span>
          </div>
          <div>:</div>
          <div className="flex flex-col items-center">
            <div className="w-16 lg:w-24">{timeLeft.seconds || '0'}</div>
            <span className="text-sm lg:text-lg text-gray-500">ثانیه</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;