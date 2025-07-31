import React from "react";
import Calendarr from "../../Calendar";
import Clock from "../../Clock";

function Create() {

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[100%] mx-auto gap-4">
      <div className="w-full lg:w-[65%] bg-white rounded-3xl p-6">
        {/* Left side content if needed */}
      </div>

      <div className="w-full lg:w-[35%] bg-white rounded-3xl p-6">
        <h2 className="text-lg font-semibold mb-4">Schedule Date & Time</h2>
        {/* Calendar */}
        <Calendarr/>
        {/* Time Display */}
        <Clock/>
      </div>
    </div>
  );
}

export default Create;
