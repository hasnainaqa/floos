import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeesList({ limit }) {
  const employees = [
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/31.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: " Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/34.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/35.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/36.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/37.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/38.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/39.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/40.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
  ];

  // ✅ Only apply limit if provided and greater than 0
  const displayedEmployees =
    typeof limit === "number" && limit > 0
      ? employees.slice(0, limit)
      : employees;

  const [cardEmployee, setCardEmployee] = useState(displayedEmployees[0]);

  function onClick(employee) {
    setCardEmployee(employee);
  }

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[100%] mx-auto gap-4">
      <div className="w-full lg:w-[75%] bg-white rounded-3xl font-inter">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6">
          <h3 className="font-semibold text-lg">Employees</h3>
          <button className="bg-[#54F439] text-black px-4 py-2 rounded-full hover:bg-[#52ff34] text-base sm:text-base">
            Add Employee
          </button>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">Name</th>
                <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">Designation</th>
                <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">Phone Number</th>
                <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">Email</th>
              </tr>
            </thead>

            <tbody>
              {displayedEmployees.map((employee, i) => (
                <tr
                  key={i}
                  onClick={() => onClick(employee)}
                  className={`hover:bg-[#F1F4F1] cursor-pointer text-[14px] font-normal w-[984px] h-[60px] max-w-full ${
                    i !== displayedEmployees.length - 1
                      ? "border-b border-[#D9D9D9]"
                      : ""
                  }`}
                >
                  <td className="flex items-center space-x-3 py-3 px-6 ">
                    <img
                      src={employee.img}
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{employee.name}</span>
                  </td>
                  <td className="py-5 px-6 whitespace-nowrap">
                    {employee.designation}
                  </td>
                  <td className="py-5 px-6 whitespace-nowrap">
                    {employee.phone}
                  </td>
                  <td className="py-5 px-6 whitespace-nowrap">
                    {employee.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full lg:w-[25%]">
        <EmployeeCard employee={cardEmployee} />
      </div>
    </div>
  );
}

export default EmployeesList;
