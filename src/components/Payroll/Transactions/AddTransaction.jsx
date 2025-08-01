import React, { useEffect, useState } from "react";
import EmployeeCard from "../../Employee/EmployeeCard";
import { FileDown } from "lucide-react";
import { Link } from "react-router-dom";

function AddTransaction() {
  const [cardEmployee, setCardEmployee] = useState(null);

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
  function onClick(employee) {
    setCardEmployee(employee);
  }

  useEffect(() => {
    setCardEmployee(employees[0]);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[100%] mx-auto gap-4">
      <div className="w-full lg:w-[75%] bg-white rounded-3xl font-inter">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6">
          <h3 className="font-semibold text-lg">Select Employees</h3>
          <div className="flex gap-2">

            <button className="h-10 w-10 bg-[#020500] rounded-full flex items-center justify-center flex-row">
              <FileDown className="text-white h-6 w-6" />
            </button>
            <Link to="/createtransaction">
              <button className="bg-[#54F439] text-black px-4 py-2 rounded-full hover:bg-[#52ff34] text-base sm:text-base">
                Add To Transaction
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-gray-500 border-b ">
                <th className="p-6 pt-0 capitalize font-normal space-x-2 whitespace-nowrap inline-flex items-center">
                  <input
                    type="checkbox"
                    className="w-6 h-6 appearance-none rounded-md border-[1px] border-[#54F439] bg-[#EEFEEB] checked:bg-[#54F439]"
                    // checked={isSelected(employee)}
                  />
                  <span className="">Name</span>
                </th>
                <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">
                  Designation
                </th>
                <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">
                  Phone Number
                </th>
                <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">
                  Email
                </th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee, i) => (
                <tr
                  key={i}
                  onClick={() => onClick(employee)}
                  className="border-b border-[#D9D9D9] hover:bg-[#F1F4F1] cursor-pointer text-[14px] font-normal w-[984px] h-[60px] max-w-full"
                >
                  <td className="flex items-center space-x-3 py-3 px-6 ">
                    <input
                      type="checkbox"
                      className="w-6 h-6 appearance-none rounded-md border-[1px] border-[#54F439] bg-[#EEFEEB] checked:bg-[#54F439]"
                      // checked={isSelected(employee)}
                    />
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

export default AddTransaction;
