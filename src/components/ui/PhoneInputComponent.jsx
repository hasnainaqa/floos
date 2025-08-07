import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneInputComponent({ onChange }) {
  const [phone, setPhone] = useState("");
  const [dialCode, setDialCode] = useState("90"); 

  useEffect(() => {
    const fullNumber = `+${dialCode}${phone}`;
    if (onChange) {
      onChange(fullNumber);
    }
  }, [dialCode, phone, onChange]);

  return (
    <div className="flex items-center gap-2 w-full relative ">
      <div className="rounded-[100px] bg-[#F1F4F1] h-14 flex items-center px-1 pr-2 text-[#020500] font-normal w-[107px]">
        <PhoneInput
          value={"+" + dialCode}
          onChange={(value, data) => {
            if (data) {
              setDialCode(data.dialCode || "90");
            }
          }}
          disableCountryCode
          disableDropdown={false}
          placeholder=""
          inputStyle={{
            width: 1,
            height: 1,
            opacity: 0,
            padding: 0,
            border: "none",
          }}
          buttonStyle={{
            backgroundColor: "#F1F4F1",
            border: "none",
            borderRadius: "9999px",
            padding: 0,
            marginRight: "0px",
          }}
          containerStyle={{
            backgroundColor: "transparent",
            border: "none",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
          dropdownStyle={{
            borderRadius: "12px",
            maxHeight: "300px",
            width: "320px", 
            zIndex: 9999,
            fontSize: "15px",
          }}
        />
        <span className=" text-base font-medium">+{dialCode}</span>
      </div>

      <input
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="h-14 px-4 rounded-full bg-[#F1F4F1] text-[#020500] focus:outline-none text-base font-normal w-full placeholder:text-[#575757]"
      />
    </div>
  );
}
