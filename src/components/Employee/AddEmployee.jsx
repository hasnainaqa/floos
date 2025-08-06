import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const AddEmployee = ({ setIsAddEmployeeOpen }) => {
  const { t } = useTranslation();

  // Input field states
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can pass this data to a parent or API
    const newEmployee = {
      firstName,
      email,
      phone: `+90 ${phone}`,
    };

    console.log("New Employee:", newEmployee);

    // Reset form & close popup
    setFirstName("");
    setEmail("");
    setPhone("");
    setIsAddEmployeeOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
        onClick={() => setIsAddEmployeeOpen(false)}
      ></div>

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 w-[360px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl z-50 p-[40px] text-center font-inter">
        {/* Icon */}
        <div className="flex justify-start mb-4">
          {/* SVG Icon kept as is */}
          <svg width="86" height="80" viewBox="0 0 86 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="43" cy="43" r="30" fill="#54F439" />
            <path d="M43 47C47.4183 47 51 43.4183 51 39C51 34.5817 47.4183 31 43 31C38.5817 31 35 34.5817 35 39C35 43.4183 38.5817 47 43 47Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M30.875 54.0011C32.1037 51.8725 33.871 50.1049 35.9994 48.876C38.1278 47.647 40.5423 47 43 47C45.4577 47 47.8722 47.647 50.0006 48.876C52.129 50.1049 53.8963 51.8725 55.125 54.0011" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <ellipse cx="34.5" cy="2.5" rx="3.5" ry="2.5" fill="#FDF1BA" />
            <ellipse cx="59.5" cy="3" rx="0.5" ry="2" fill="#DDCE1F" />
            <circle cx="83.5" cy="44.5" r="2.5" fill="#FDF1BA" />
            <circle cx="2" cy="36" r="2" fill="#54F439" />
            <path d="M78 77L76.771 74.0868C76.0326 72.3366 74.4706 71.8194 73.2995 72.9374C71.995 74.1829 70.2476 73.3832 69.6446 71.2646L69 69" stroke="#C3FDBA" strokeWidth="3" strokeLinecap="round" />
            <path d="M4 5C5.5873 5.69136 8.80952 8.25926 9 13" stroke="#C3FDBA" strokeWidth="3" strokeLinecap="round" />
            <circle cx="17.5" cy="78.5" r="1.5" fill="#54F439" />
          </svg>
        </div>

        {/* Heading */}
        <div className="flex justify-start text-[#020500] my-6">
          <h2 className="text-[28px] font-semibold">{t("Add Employee")}</h2>
        </div>

        {/* Form */}
        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label htmlFor="firstname" className="text-sm text-gray-500 block mb-1">First name</label>
            <input
              type="text"
              id="firstname"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm text-gray-500 block mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="text-sm text-gray-500 block mb-1">Phone</label>
            <div className="flex gap-2">
              {/* Country Code */}
              <div className="flex items-center px-4 py-3 rounded-full border border-gray-300 bg-gray-100 text-sm">
                <span className="mr-2">🇹🇷</span> +90
              </div>

              {/* Phone Input */}
              <input
                type="tel"
                id="phone"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 bg-gray-100 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 rounded-full transition duration-200"
          >
            {t("Add Employee")}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
