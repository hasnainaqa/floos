import React from "react";

function Transactions() {
  const employees = [
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Jane Doe",
      designation: "HR Manager",
      phone: "(805) 555-1234",
      email: "jane.doe@example.com",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Jane Doe",
      designation: "HR Manager",
      phone: "(805) 555-1234",
      email: "jane.doe@example.com",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
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
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Jane Doe",
      designation: "HR Manager",
      phone: "(805) 555-1234",
      email: "jane.doe@example.com",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Jane Doe",
      designation: "HR Manager",
      phone: "(805) 555-1234",
      email: "jane.doe@example.com",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
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
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
    },
  ];
  return (
    <div className=" rounded-3xl font-inter  bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6">
        <h3 className="font-semibold text-lg">Transactions</h3>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="text-gray-500 border-b">
              {Object.keys(employees[0]).map((key, index) => {
                if (key === "img") return null;
                const labels = {
                  name: "Name",
                  designation: "Designation",
                  phone: "Phone Number",
                  email: "Email",
                  amount: "Amount",
                  DateTime: "Date & Time",
                  TransactionID: "Transaction ID",
                };
                return (
                  <th
                    key={index}
                    className="p-6 pt-0 capitalize font-normal whitespace-nowrap"
                  >
                    {labels[key] || key}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, i) => (
              <tr
                key={i}
                className="border-b hover:bg-[#F1F4F1] cursor-pointer text-[14px] font-normal"
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
  );
}

export default Transactions;
