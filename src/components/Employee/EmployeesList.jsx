import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import Pagination from "../Pagination";

function EmployeesList({ limit }) {
  const employees = [
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
    {
      name: "Cody Fisher",
      designation: "Backend Developer",
      phone: "(213) 555-1234",
      email: "cody@example.com",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      name: "Jane Cooper",
      designation: "Frontend Engineer",
      phone: "(415) 789-4567",
      email: "jane@example.com",
      img: "https://randomuser.me/api/portraits/women/43.jpg",
    },
    {
      name: "Kristin Watson",
      designation: "UI/UX Designer",
      phone: "(503) 867-5309",
      email: "kristin@example.com",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
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
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState("10");

  const totalPages =
    itemsPerPage === "All"
      ? 1
      : Math.ceil(employees.length / parseInt(itemsPerPage));

  const displayedEmployees =
    itemsPerPage === "All"
      ? employees
      : employees.slice(
          (currentPage - 1) * parseInt(itemsPerPage),
          currentPage * parseInt(itemsPerPage)
        );
  // const displayedEmployees =
  //   typeof limit === "number" && limit > 0
  //     ? employees.slice(0, limit)
  //     : employees;

  const [cardEmployee, setCardEmployee] = useState(displayedEmployees[0]);


  function onClick(employee) {
    setCardEmployee(employee);
  }

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[100%] mx-auto font-inter">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[75%] bg-white rounded-3xl">
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
                  <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">
                    Name
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
                {displayedEmployees.map((employee, i) => (
                  <tr
                    key={i}
                    onClick={() => onClick(employee)}
                    className={`hover:bg-[#F1F4F1] cursor-pointer text-[14px] font-normal ${
                      i !== displayedEmployees.length - 1
                        ? "border-b border-[#D9D9D9]"
                        : ""
                    }`}
                  >
                    <td className="flex items-center space-x-3 py-3 px-6">
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

      {/* ✅ Pagination */}
{!limit && <div className="flex justify-center items-center">
      <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>}
    </div>
  );
}

export default EmployeesList;
