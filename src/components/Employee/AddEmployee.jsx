import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInputComponent from "../ui/PhoneInputComponent";

const AddEmployee = ({ setIsAddEmployeeOpen }) => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (phoneNumber) => {
    setPhone(phoneNumber);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name,
      salary,
      designation,
      email,
      phone: `+90 ${phone}`,
    };

    console.log("New Employee:", newEmployee);

    setName("");
    setSalary("");
    setDesignation("");
    setEmail("");
    setPhone("");
    setIsAddEmployeeOpen(false);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
        onClick={() => setIsAddEmployeeOpen(false)}
      ></div>

      <div className="fixed top-1/2 left-1/2 lg:w-[508px] md:w-[508px] w-[90%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl z-50 p-[60px] text-center font-inter">
        <button
          onClick={() => setIsAddEmployeeOpen(false)}
          className="absolute top-4 right-4 text-black text-xl font-bold"
        >
          &times;
        </button>

        <div className="flex justify-start mb-4">
          <svg
            width="86"
            height="80"
            viewBox="0 0 86 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="43" cy="43" r="30" fill="#54F439" />
            <path
              d="M43 47C47.4183 47 51 43.4183 51 39C51 34.5817 47.4183 31 43 31C38.5817 31 35 34.5817 35 39C35 43.4183 38.5817 47 43 47Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M30.875 54.0011C32.1037 51.8725 33.871 50.1049 35.9994 48.876C38.1278 47.647 40.5423 47 43 47C45.4577 47 47.8722 47.647 50.0006 48.876C52.129 50.1049 53.8963 51.8725 55.125 54.0011"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <ellipse cx="34.5" cy="2.5" rx="3.5" ry="2.5" fill="#FDF1BA" />
            <ellipse cx="59.5" cy="3" rx="0.5" ry="2" fill="#DDCE1F" />
            <circle cx="83.5" cy="44.5" r="2.5" fill="#FDF1BA" />
            <circle cx="2" cy="36" r="2" fill="#54F439" />
            <path
              d="M78 77L76.771 74.0868C76.0326 72.3366 74.4706 71.8194 73.2995 72.9374C71.995 74.1829 70.2476 73.3832 69.6446 71.2646L69 69"
              stroke="#C3FDBA"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M4 5C5.5873 5.69136 8.80952 8.25926 9 13"
              stroke="#C3FDBA"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="17.5" cy="78.5" r="1.5" fill="#54F439" />
          </svg>
        </div>

        <div className="flex justify-start text-[#020500] my-6">
          <h2 className="text-[28px] font-semibold">{t("Add Employee")}</h2>
        </div>

        <form className="" onSubmit={handleSubmit}>
          <div className="flex gap-1">
            <div className="relative h-14 rounded-full border border-[#E8EDE8] px-5 pt-2 mb-4">
              <label
                htmlFor="name"
                className="absolute left-5 top-2 text-xs font-normal text-[#575757]"
              >
                {t("Name")}
              </label>
              <input
                type="text"
                id="name"
                placeholder="Andre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full h-full font-normal text-sm text-[#020500] pt-4 pb-2 outline-none placeholder:text-[#020500]"
              />
            </div>
            <div className="relative h-14 rounded-full border border-[#E8EDE8] px-5 pt-2 mb-4">
              <label
                htmlFor="Salary"
                className="absolute left-5 top-2 text-xs font-normal text-[#575757]"
              >
                {t("Salary")}
              </label>
              <input
                type="number"
                id="salary"
                min={1}
                placeholder="$500"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
                className="w-full h-full font-normal text-sm text-[#020500] pt-4 pb-2 outline-none placeholder:text-[#020500]"
              />
            </div>
          </div>

          <div className="relative h-14 rounded-full border border-[#E8EDE8] px-5 pt-2 mb-4">
            <label
              htmlFor="designation"
              className="absolute left-5 top-2 text-xs font-normal text-[#575757]"
            >
              {t("Designation")}
            </label>
            <input
              type="text"
              id="designation"
              placeholder="Mortgage Loan Officer"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
              className="w-full h-full font-normal text-sm text-[#020500] pt-4 pb-2 outline-none placeholder:text-[#020500]"
            />
          </div>

          <div className="relative h-14 rounded-full border border-[#E8EDE8] px-5 pt-2 mb-4">
            <label
              htmlFor="email"
              className="absolute left-5 top-2 text-xs font-normal text-[#575757]"
            >
              {t("Email")}
            </label>
            <input
              type="email"
              id="email"
              placeholder="andregomen@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-full font-normal text-sm text-[#020500] pt-4 pb-2 outline-none placeholder:text-[#020500]"
            />
          </div>

          <PhoneInputComponent onChange={handlePhoneChange} />
<div className="normalheight">

          <button
            type="submit"
            className="mt-6 w-full bg-[#54F439] hover:bg-[#5fff43] text-[#020500] font-semibold py-3 rounded-full  "
            >
            {t("Add Employee")}
          </button>
            </div>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
