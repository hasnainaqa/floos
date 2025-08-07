import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import Pagination from "../ui/Pagination";
import { useTranslation } from "react-i18next";
import AddEmployee from "./AddEmployee";

function EmployeesList({ limit }) {
  const { t } = useTranslation();
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false);

  const employees = [
    {
      id: 1,
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "T001",
    },
    {
      id: 2,
      name: "Cody Fisher",
      designation: "Backend Developer",
      phone: "(213) 555-1234",
      email: "cody@example.com",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: 3,
      name: "Jane Cooper",
      designation: "Frontend Engineer",
      phone: "(415) 789-4567",
      email: "jane@example.com",
      img: "https://randomuser.me/api/portraits/women/43.jpg",
    },
    {
      id: 4,
      name: "Kristin Watson",
      designation: "UI/UX Designer",
      phone: "(503) 867-5309",
      email: "kristin@example.com",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 5,
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/31.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "T002",
    },
    {
      id: 6,
      name: "Ralph Edwards",
      designation: "Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "T003",
    },
    {
      id: 7,
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "T004",
    },
    {
      id: 8,
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/34.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "T005",
    },
    {
      id: 9,
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/35.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "T006",
    },
    {
      id: 10,
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/36.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "T007",
    },
    {
      id: 11,
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/37.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "T008",
    },
    {
      id: 12,
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/38.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "T009",
    },
    {
      id: 13,
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/39.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "T010",
    },
    {
      id: 14,
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/40.jpg",
      amount: "$1234",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "T011",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState("10");

  const totalPages =
    itemsPerPage === "All"
      ? 1
      : Math.ceil(employees.length / parseInt(itemsPerPage));

  let displayedEmployees =
    itemsPerPage === "All"
      ? employees
      : employees.slice(
          (currentPage - 1) * parseInt(itemsPerPage),
          currentPage * parseInt(itemsPerPage)
        );
  if (limit) {
    displayedEmployees =
      typeof limit === "number" && limit > 0
        ? employees.slice(0, limit)
        : employees;
  }

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
        <div className="w-full lg:w-[75%]">
          <div className=" bg-white rounded-3xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6">
              <h3 className="font-semibold text-lg">{t("Employees")}</h3>
              <button
                onClick={() => setIsAddEmployeeOpen(true)}
                className="bg-[#54F439] text-black px-6 py-3 rounded-full hover:bg-[#52ff34] text-base sm:text-base">
                {t("Add Employee")}
              </button>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="text-gray-500 border-b ">
                    <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">
                      {t("Name")}
                    </th>
                    <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">
                      {t("Designation")}
                    </th>
                    <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">
                      {t("Phone Number")}
                    </th>
                    <th className="p-6 pt-0  capitalize font-normal whitespace-nowrap">
                      {t("Email")}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {displayedEmployees.map((employee, i) => (
                    <tr
                      key={i}
                      onClick={() => onClick(employee)}
                      className={`cursor-pointer text-[14px] font-normal
                      ${
                        i !== displayedEmployees.length - 1
                          ? "border-b border-[#D9D9D9]"
                          : ""
                      }
                      ${
                        cardEmployee?.id === employee.id
                          ? "bg-[#F1F4F1]"
                          : "hover:bg-[#F1F4F1]"
                      }`}>
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
          {/* Pagination */}
          {!limit && (
            <div className="flex justify-end items-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={handleItemsPerPageChange}
              />
            </div>
          )}
        </div>

        <div className="w-full lg:w-[25%]">
          <EmployeeCard employee={cardEmployee} />
        </div>
      </div>
      {isAddEmployeeOpen &&  <AddEmployee setIsAddEmployeeOpen= {setIsAddEmployeeOpen}/> }
    </div>
  );
}

export default EmployeesList;
