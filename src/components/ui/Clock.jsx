import React, { useState } from "react";

const Clock = () => {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [ampm, setAmPm] = useState("AM");

  const handleHourClick = (h) => {
    setHour(h);
  };
  return (
    <div>
      <div className="flex justify-center items-center bg-[#54F439] text-white rounded-lg py-5 text-5xl font-bold my-6">
        {hour.toString().padStart(2, "0")}:{minute.toString().padStart(2, "0")}
        <div className="flex flex-col ml-4 text-base font-medium">
          <button
            className={`${ampm === "AM" ? "text-[#FFFFFF] font-bold" : "opacity-60"}`}
            onClick={() => setAmPm("AM")}
          >
            AM
          </button>
          <button
            className={`${ampm === "PM" ? "text-[#FFFFFF] font-bold" : "opacity-60"}`}
            onClick={() => setAmPm("PM")}
          >
            PM
          </button>
        </div>
      </div>

      {/* Clock Dial */}
      <div className="relative w-64 h-64 mx-auto rounded-full border-none bg-[#E8EDE8] flex items-center justify-center">
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const radius = 90;
          const x = Math.sin(angle) * radius;
          const y = -Math.cos(angle) * radius;

          return (
            <div
              key={i}
              className="absolute text-[#332D2D] cursor-pointer hover:scale-110 transition-transform hover:bg-[#54F439] rounded-full p-1 "
              onClick={() => handleHourClick(i === 0 ? 12 : i)}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {i === 0 ? 12 : i}
            </div>
          );
        })}

        {/* Clock Hand */}
        <div
          className="absolute w-1 bg-green-500 bottom-1/2 origin-bottom"
          style={{
            height: "80px",
            transform: `rotate(${(hour % 12) * 30}deg)`,
            transformOrigin: "bottom center",
          }}
        />
      </div>
    </div>
  );
};

export default Clock;
