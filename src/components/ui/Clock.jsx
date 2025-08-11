import React, { useEffect, useState } from "react";

const Clock = ({ selectedDate }) => {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [ampm, setAmPm] = useState("AM");
  const [mode, setMode] = useState("hour");

  useEffect(() => {
    if (selectedDate) {
      const parsed = new Date(selectedDate);
      if (!isNaN(parsed.getTime())) {
        let h = parsed.getHours();
        let m = parsed.getMinutes();

        setHour(h % 12 || 12); 
        setMinute(m);
        setAmPm(h >= 12 ? "PM" : "AM");
      }
    }
  }, [selectedDate]);

  const handleHourClick = (h) => {
    setHour(h);
    setMode("minute");
  };

  const handleMinuteClick = (m) => {
    setMinute(m);
    setMode("hour");
  };

  const hours = [...Array(12)].map((_, i) => (i === 0 ? 12 : i));
  const minutes = [...Array(12)].map((_, i) => i * 5);

  return (
    <div>
      <div className="flex justify-center items-center bg-[#54F439] text-[#FFFFFF8A] rounded-lg py-5 text-6xl font-light my-6 ">
        <span
          onClick={() => setMode("hour")}
          className={`cursor-pointer ${
            mode === "hour" ? "text-[#020500]" : "opacity-60"
          }`}>
          {hour.toString().padStart(2, "0")}
        </span>
        :
        <span
          onClick={() => setMode("minute")}
          className={`cursor-pointer ${
            mode === "minute" ? "text-[#020500]" : "opacity-60"
          }`}>
          {minute.toString().padStart(2, "0")}
        </span>
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

      <div className="relative w-64 h-64 mx-auto rounded-full bg-[#E8EDE8] flex items-center justify-center">
        {(mode === "hour" ? hours : minutes).map((val, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const radius = 90;
          const x = Math.sin(angle) * radius;
          const y = -Math.cos(angle) * radius;

          const isSelected = mode === "hour" ? hour === val : minute === val;

          return (
            <div
              key={i}
              className={`absolute cursor-pointer w-[32px] h-[32px] flex items-center justify-center rounded-full transition-all
                ${
                  isSelected
                    ? "bg-[#54F439] text-white font-bold scale-110"
                    : "text-[#332D2D] hover:bg-[#54F439] hover:text-white hover:scale-110"
                }
              `}
              onClick={() =>
                mode === "hour" ? handleHourClick(val) : handleMinuteClick(val)
              }
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}>
              {val.toString().padStart(2, "0")}
            </div>
          );
        })}

        <div
          className="absolute w-1 bottom-1/2 origin-bottom"
          style={{
            height: "80px",
            backgroundColor: "#54F439",
            transform: `rotate(${
              mode === "hour" ? (hour % 12) * 30 : (minute / 5) * 30
            }deg)`,
            transformOrigin: "bottom center",
          }}
        />
      </div>
    </div>
  );
};

export default Clock;
