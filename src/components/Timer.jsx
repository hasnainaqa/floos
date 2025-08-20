import { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  // Format into MM:SS
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className=" text-[#575757] text-center gap-2">
      <h2 className="font-medium text-xs sm:text-xl md:text-2xl ">Pending - Expires in</h2>
      <span className="font-medium text-sm sm:text-2xl md:text-3xl">
       {minutes}:{seconds.toString().padStart(2, "0")}
      </span>
    </div>
  );
};

export default Timer;
