import React, { useState } from "react";
import EmployeeCard from "../../Employee/EmployeeCard";
import { Link } from "react-router-dom";
import Pagination from "../../ui/Pagination";
import { useTranslation } from "react-i18next";
import UploadButton from "./UploadFile";

function AddTransaction() {
  const { t, i18n } = useTranslation();
  const employees = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
  const [cardEmployee, setCardEmployee] = useState(employees[0]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  function handleSelectAll() {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    if (newSelectAll) {
      setSelectedEmployees(employees);
    } else {
      setSelectedEmployees([]);
    }
  }
  function handleCheckboxChange(employee) {
    const isSelected = selectedEmployees.some((e) => e.id === employee.id);

    if (isSelected) {
      const filtered = selectedEmployees.filter((e) => e.id !== employee.id);
      setSelectedEmployees(filtered);
      setSelectAll(false);
    } else {
      const updated = [...selectedEmployees, employee];
      setSelectedEmployees(updated);
      if (updated.length === employees.length) {
        setSelectAll(true);
      }
    }
  }
  function onClick(employee) {
    setCardEmployee(employee);
  }

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

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[100%] mx-auto gap-4">
      <div className="w-full lg:w-[75%] font-inter">
        <div className="bg-white rounded-3xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6">
            <h3 className="font-semibold text-lg">{t("Select Employees")}</h3>
            <div className="flex gap-2">
              <UploadButton/>
              <Link
                to="/payroll/createtransaction"
                state={{ selectedEmployees }}>
                <button
                  className="bg-[#54F439] text-black px-6 py-3 rounded-full hover:bg-[#52ff34] text-base sm:text-base"
                  disabled={selectedEmployees.length === 0}>
                  {t("Add To Transaction")}
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-[#575757] border-b ">
                  <th className="p-6 pt-0 capitalize font-normal space-x-2 whitespace-nowrap inline-flex items-center">
                    <input
                      type="checkbox"
                      className="
    w-6 h-6 appearance-none rounded-md border-[1px] border-[#54F439] bg-[#EEFEEB] 
    checked:bg-[#54F439]
    relative
    checked:after:content-['✔']
    checked:after:absolute
    checked:after:text-white
    checked:after:top-[0px]
    checked:after:left-1
    checked:after:text-sm
    checked:after:font-bold"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />

                    <span className="">{t("Name")}</span>
                  </th>
                  <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">
                    {" "}
                    {t("Designation")}
                  </th>
                  <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">
                    {t("Phone Number")}
                  </th>
                  <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">
                    {t("Email")}
                  </th>
                  <th className="p-6 pt-0 capitalize font-normal whitespace-nowrap">
                    {t("Salary")}
                  </th>
                </tr>
              </thead>

              <tbody>
                {displayedEmployees.map((employee, i) => (
                  <tr
                    key={i}
                    onClick={() => {
                      onClick(employee); // For card highlight
                      handleCheckboxChange(employee); // For checkbox selection
                    }}
                    className="border-b last:border-b-0 border-[#D9D9D9] hover:bg-[#F1F4F1] text-[#020500] cursor-pointer text-sm font-normal w-[984px] h-[60px] max-w-full">
                    <td
                      className="flex items-center space-x-3 rtl:space-x-reverse py-3 px-6"
                      dir={i18n === "ar" ? "rtl" : "ltr"} // Or detect from your i18n
                    >
                      <input
                        type="checkbox"
                        className="
      w-6 h-6 appearance-none rounded-md border-[1px] border-[#54F439] bg-[#EEFEEB] 
      checked:bg-[#54F439]
      relative
      checked:after:content-['✔']
      checked:after:absolute
      checked:after:text-black
      checked:after:top-[0px]
      checked:after:left-[4px]
      checked:after:text-sm
      checked:after:font-bold"
                        checked={selectedEmployees.some(
                          (e) => e.id === employee.id
                        )}
                        onChange={() => handleCheckboxChange(employee)}
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
                    <td className="py-5 px-6 whitespace-nowrap">
                      {employee.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>
      </div>

      <div className="w-full lg:w-[25%]">
        <EmployeeCard employee={cardEmployee} />
      </div>
    </div>
  );
}

export default AddTransaction;
