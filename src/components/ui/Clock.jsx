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
      <div className="flex justify-center items-center bg-[#54F439] text-[#FFFFFF8A] rounded-lg py-5 text-6xl font-light my-6 ">
        <span className="text-[#020500]">{hour.toString().padStart(2, "0")}</span>:
        <span className="text-[#FFFFFF8A]">{minute.toString().padStart(2, "0")}</span>
        <div className="flex flex-col ml-4 text-base font-medium">
          <button
            className={`${
              ampm === "AM" ? "text-[#FFFFFF] font-bold" : "opacity-60"
            }`}
            onClick={() => setAmPm("AM")}>
            AM
          </button>
          <button
            className={`${
              ampm === "PM" ? "text-[#FFFFFF] font-bold" : "opacity-60"
            }`}
            onClick={() => setAmPm("PM")}>
            PM
          </button>
        </div>
      </div>

      {/* Clock Dial */}
      <div className="relative w-64 h-64 mx-auto rounded-full border-none bg-[#E8EDE8] flex items-center justify-center">
        {[...Array(12)].map((_, i) => {
          const hourValue = i === 0 ? 12 : i;
          const angle = (i * 30 * Math.PI) / 180;
          const radius = 90;
          const x = Math.sin(angle) * radius;
          const y = -Math.cos(angle) * radius;

          const isSelected = hour === hourValue;

          return (
            <div
              key={i}
              className={`absolute text-[#332D2D] cursor-pointer w-[32px] h-[32px] flex items-center justify-center rounded-full transition-all
        ${
          isSelected
            ? "bg-[#54F439] text-white font-bold scale-110"
            : "hover:bg-[#54F439] hover:text-white hover:scale-110"
        }
      `}
              onClick={() => handleHourClick(hourValue)}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}>
              {hourValue}
            </div>
          );
        })}

        {/* Clock Hand */}
        <div
          className="absolute w-1 bottom-1/2 origin-bottom"
          style={{
            height: "80px",
            backgroundColor: "#54F439",
            transform: `rotate(${(hour % 12) * 30}deg)`,
            transformOrigin: "bottom center",
          }}
        />
      </div>
    </div>
  );
};

export default Clock;
