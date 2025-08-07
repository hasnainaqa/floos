import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneInputComponent() {
  const [phone, setPhone] = useState("");
  const [dialCode, setDialCode] = useState("90"); // Default: Turkey
  const [country, setCountry] = useState("tr");

  return (
    <div className="flex items-center gap-2 w-full relative ">
      {/* Country code & flag */}
      <div className="rounded-full bg-[#E8EDE8] h-12  overflow-hidden flex items-center px-3">
        <PhoneInput
          country={country}
          value={"+" + dialCode}
          onChange={(value, data) => {
            if (data) {
              setCountry(data.countryCode || "tr");
              setDialCode(data.dialCode || "90");
            }
          }}
          // enableSearch
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
            backgroundColor: "#E8EDE8",
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
            width: "320px", // bigger width
            zIndex: 9999,
            fontSize: "15px",
          }}
        />
        <span className="ml-2 text-base font-medium">+{dialCode}</span>
      </div>

      {/* Phone Input Box */}
      <input
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="h-12 px-4 rounded-full bg-[#E8EDE8] focus:outline-none text-base w-full"
      />
    </div>
  );
}
