import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendarr() {
  const [date, setDate] = useState(new Date());

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="bg-white rounded-3xl w-full max-w-xl mx-auto">
      <div className="flex gap-4 items-start">
        {/* Calendar */}
        <div className="w-[85%]">
          <Calendar
            onChange={setDate}
            value={date}
            showNeighboringMonth={false}
            next2Label={null}
            prev2Label={null}
            tileClassName={({ date: d, view }) => {
              if (view !== "month") return "";
              if (d.toDateString() === date.toDateString()) {
                return "bg-[#54F439] text-white rounded-full font-semibold";
              } else {
                return "bg-[#54F439] text-black rounded-full";
              }
            }}
            className="
    !border-none !shadow-none !outline-none text-center w-full
    [&_button]:text-sm
    [&_.react-calendar__navigation]:!hidden 
    [&_.react-calendar__month-view__weekdays]:border-none 
    [&_.react-calendar__month-view__weekdays]:mb-2 
    [&_.react-calendar__tile]:aspect-square 
    [&_.react-calendar__tile]:p-2
    [&_.react-calendar__tile]:hover:bg-green-100
  "
          />
        </div>

        {/* Vertical Month Sidebar */}
        <div className="relative flex flex-col items-center max-h-72 overflow-y-scroll w-16 py-6 mx-auto scrollbar-hide">
  {/* Top Gradient */}
  <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
  
  {/* Bottom Gradient */}
  <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

  {/* Scrollable Month List */}
  <style>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>

  {months.map((m, i) => (
    <button
      key={m}
      onClick={() => {
        const newDate = new Date(date);
        newDate.setDate(1); // Prevent overflow (e.g., Feb 30)
        newDate.setMonth(i);
        setDate(newDate);
      }}
      className={`py-2 w-full text-center text-sm transition relative ${
        i === date.getMonth()
          ? "text-black font-bold text-base border-y border-gray-300"
          : "text-[#B0B0B0]"
      }`}
    >
      {m}
    </button>
  ))}
</div>

      </div>
    </div>
  );
}

export default Calendarr;
