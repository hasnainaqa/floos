import React from "react";
import Pagination from "../ui/Pagination";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TransactionDetails from "./TransactionDetails";

function TransactionPage() {
  const { t, i18n } = useTranslation();
  const [popupData, setPopupData] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function onClick(employee) {
    setPopupData(employee);
    setIsPopupOpen(true);
  }
  const employees = [
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
      paidamount: "$763",
    },
    {
      name: "Jane Doe",
      designation: "HR Manager",
      phone: "(805) 555-1234",
      email: "jane.doe@example.com",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
      paidamount: "$763",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
      paidamount: "$763",
    },
    {
      name: "Jane Doe",
      designation: "HR Manager",
      phone: "(805) 555-1234",
      email: "jane.doe@example.com",
      img: "https://randomuser.me/api/portraits/women/43.jpg",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
      paidamount: "$763",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/34.jpg",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
      paidamount: "$763",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/35.jpg",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
      paidamount: "$763",
    },
    {
      name: "Jane Doe",
      designation: "HR Manager",
      phone: "(805) 555-1234",
      email: "jane.doe@example.com",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
      paidamount: "$763",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/36.jpg",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
      paidamount: "$763",
    },
    {
      name: "Jane Doe",
      designation: "HR Manager",
      phone: "(805) 555-1234",
      email: "jane.doe@example.com",
      img: "https://randomuser.me/api/portraits/women/46.jpg",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
      paidamount: "$763",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/men/37.jpg",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
      paidamount: "$763",
    },
    {
      name: "Ralph Edwards",
      designation: "Mortgage Loan Officer",
      phone: "(805) 123-5243",
      email: "thuhang.nute@gmail.com",
      img: "https://randomuser.me/api/portraits/women/38.jpg",
      DateTime: "15 May 2020 8:00 am",
      TransactionID: "thuhang.nute@gmail.com",
      paidamount: "$763",
    },
  ];

  // Pagination
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
          currentPage * parseInt(itemsPerPage),
        );

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className="  font-inter ">
      <div className=" bg-white rounded-3xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6  ">
          <h3 className="font-semibold text-lg">{t("Transactions")}</h3>
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
                    DateTime: "Date & Time",
                    TransactionID: "Transaction ID",
                    paidamount: "Paid Amount",
                  };
                  return (
                    <th
                      key={index}
                      className={`p-6 pt-0 capitalize font-normal whitespace-nowrap ${
                        key === "name" && i18n.language === "ar"
                          ? "text-right"
                          : "text-left"
                      }`}
                    >
                      {t(labels[key])}
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {displayedEmployees.map((employee, i) => (
                <tr
                  key={i}
                  onClick={() => onClick(employee)}
                  className="border-b last:border-b-0 hover:bg-[#F1F4F1] cursor-pointer text-sm font-normal"
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
                    {employee.DateTime}
                  </td>
                  <td className="py-5 px-6 whitespace-nowrap">
                    {employee.email}
                  </td>
                  <td className="py-5 px-6 whitespace-nowrap ">
                    {employee.paidamount}
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
      {isPopupOpen && (
        <TransactionDetails
          popupData={popupData}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  );
}

export default TransactionPage;
