import React, { useState } from "react";
import PayrollCard from "./PayrollCard";
import { Link } from "react-router-dom";
import Pagination from "../ui/Pagination";
import { useTranslation } from "react-i18next";

function PayrollList() {
  const { t, i18n } = useTranslation();
  const payments = [
    {
      id: 1,
      templateName: "Bonus Q1",
      scheduledDate: "15 May 2020 8:00 am",
      usersAdded: [
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
          designation: "Mortgage Loan Officer",
          phone: "(805) 123-5243",
          email: "thuhang.nute@gmail.com",
          img: "https://randomuser.me/api/portraits/men/41.jpg",
          amount: "$1234",
          DateTime: "15 May 2020 8:00 am",
          TransactionID: "T001",
        },
        {
          id: 7,
          name: "Cody Fisher",
          designation: "Backend Developer",
          phone: "(213) 555-1234",
          email: "cody@example.com",
          img: "https://randomuser.me/api/portraits/men/23.jpg",
        },
        {
          id: 8,
          name: "Jane Cooper",
          designation: "Frontend Engineer",
          phone: "(415) 789-4567",
          email: "jane@example.com",
          img: "https://randomuser.me/api/portraits/women/43.jpg",
        },
        {
          id: 9,
          name: "Kristin Watson",
          designation: "UI/UX Designer",
          phone: "(503) 867-5309",
          email: "kristin@example.com",
          img: "https://randomuser.me/api/portraits/women/22.jpg",
        },
        {
          id: 10,
          name: "Ralph Edwards",
          designation: "Mortgage Loan Officer",
          phone: "(805) 123-5243",
          email: "thuhang.nute@gmail.com",
          img: "https://randomuser.me/api/portraits/men/31.jpg",
          amount: "$1234",
          DateTime: "15 May 2020 8:00 am",
          TransactionID: "T002",
        },
      ],
      type: "Individual",
      totalAmount: "$879.10",
    },
    {
      id: 2,
      templateName: "Vacation Leave Batch 1",
      scheduledDate: "15 Feb 2020 14:20 am",

      usersAdded: [
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
      ],
      type: "Batch Payment",
      totalAmount: "$1250.75",
    },
    {
      id: 3,
      templateName: "Salary March",
      scheduledDate: "Mar 1, 2020 09:00",

      usersAdded: [
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
      ],
      type: "Batch Payment",
      totalAmount: "$3423.50",
    },
    {
      id: 4,
      templateName: "Quarterly Bonus",
      scheduledDate: "Apr 10, 2020 11:45",

      usersAdded: [
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
      ],
      type: "Batch Payment",
      totalAmount: "$1120.20",
    },
    {
      id: 5,
      templateName: "Annual Leave",
      scheduledDate: "May 22, 2020 16:10",

      usersAdded: [
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
      ],
      type: "Individual",
      totalAmount: "$620.00",
    },
    {
      id: 6,
      templateName: "Bonus Q2",
      scheduledDate: "Jun 30, 2020 17:50",

      usersAdded: [
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
          id: 6,
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
          id: 7,
          name: "Cody Fisher",
          designation: "Backend Developer",
          phone: "(213) 555-1234",
          email: "cody@example.com",
          img: "https://randomuser.me/api/portraits/men/23.jpg",
        },
        {
          id: 8,
          name: "Jane Cooper",
          designation: "Frontend Engineer",
          phone: "(415) 789-4567",
          email: "jane@example.com",
          img: "https://randomuser.me/api/portraits/women/43.jpg",
        },
        {
          id: 9,
          name: "Kristin Watson",
          designation: "UI/UX Designer",
          phone: "(503) 867-5309",
          email: "kristin@example.com",
          img: "https://randomuser.me/api/portraits/women/22.jpg",
        },
        {
          id: 10,
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
          id: 9,
          name: "Kristin Watson",
          designation: "UI/UX Designer",
          phone: "(503) 867-5309",
          email: "kristin@example.com",
          img: "https://randomuser.me/api/portraits/women/22.jpg",
        },
        {
          id: 10,
          name: "Ralph Edwards",
          designation: "Mortgage Loan Officer",
          phone: "(805) 123-5243",
          email: "thuhang.nute@gmail.com",
          img: "https://randomuser.me/api/portraits/men/31.jpg",
          amount: "$1234",
          DateTime: "15 May 2020 8:00 am",
          TransactionID: "T002",
        },
      ],
      type: "Batch Payment",
      totalAmount: "$2450.00",
    },
    {
      id: 7,
      templateName: "Holiday Pay",
      scheduledDate: "Jul 4, 2020 13:15",

      usersAdded: [
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
      ],
      type: "Batch Payment",
      totalAmount: "$980.75",
    },
    {
      id: 8,
      templateName: "Salary July",
      scheduledDate: "Jul 31, 2020 08:30",

      usersAdded: [
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
      ],
      type: "Batch Payment",
      totalAmount: "$5230.60",
    },
    {
      id: 9,
      templateName: "Performance Bonus",
      scheduledDate: "Aug 20, 2020 12:05",

      usersAdded: [
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
      ],
      type: "Batch Payment",
      totalAmount: "$1675.25",
    },
    {
      id: 10,
      templateName: "Salary August",
      scheduledDate: "Aug 31, 2020 10:00",

      usersAdded: [
        {
          id: 3,
          name: "Jane Cooper",
          designation: "Frontend Engineer",
          phone: "(415) 789-4567",
          email: "jane@example.com",
          img: "https://randomuser.me/api/portraits/women/43.jpg",
        },
      ],
      type: "Batch Payment",
      totalAmount: "$5099.90",
    },
    {
      id: 11,
      templateName: "Salary September",
      scheduledDate: "Sep 30, 2020 10:00",

      usersAdded: [
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
      ],
      type: "Batch Payment",
      totalAmount: "$5400.25",
    },
  ];

  const [cardPayment, setCardPayment] = useState(payments[0]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState("10");

  const totalPages =
    itemsPerPage === "All"
      ? 1
      : Math.ceil(payments.length / parseInt(itemsPerPage));

  const displayedPayments =
    itemsPerPage === "All"
      ? payments
      : payments.slice(
          (currentPage - 1) * parseInt(itemsPerPage),
          currentPage * parseInt(itemsPerPage)
        );

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  function onClick(payment) {
    setCardPayment(payment);
  }

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[100%] mx-auto gap-4">
      <div className="w-full lg:w-[75%]">
        <div className=" bg-white rounded-3xl font-inter">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6">
            <h3 className="font-semibold text-lg">{t("Payroll Template")}</h3>
            <Link to="/payroll/addtransaction">
              <button className="bg-[#54F439] text-black px-3 py-3 rounded-full hover:bg-[#52ff34] text-sm sm:text-base">
                {t("Create Transaction")}
              </button>
            </Link>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-gray-500 border-b">
                  {Object.keys(payments[0])
                    .filter((key) => key !== "id")
                    .map((key, index) => {
                      const labels = {
                        templateName: "Template Name",
                        scheduledDate: "Scheduled Date",
                        usersAdded: "Users Added",
                        type: "Type",
                        totalAmount: "Total Amount",
                      };
                      return (
                        <th
                          key={index}
                          className="p-6 pt-0 capitalize font-normal whitespace-nowrap">
                          {t(labels[key] || key)}
                        </th>
                      );
                    })}
                </tr>
              </thead>

              <tbody>
                {displayedPayments.map((payment, i) => {
                  return (
                    <>
                      <tr
                        key={i}
                        onClick={() => onClick(payment)}
                        className={`hover:bg-[#F1F4F1] cursor-pointer text-sm font-normal w-[984px] h-[60px] max-w-full last:border-b-0 ${
                          i !== payments.length - 1
                            ? "border-b border-[#D9D9D9]"
                            : ""
                        }
                       ${
                         cardPayment?.id === payment.id
                           ? "bg-[#F1F4F1]"
                           : "hover:bg-[#F1F4F1]"
                       }`}>
                        <td
                          className={`flex items-center py-3 px-6 ${
                            i18n.language === "ar"
                              ? "flex-row-reverse space-x-reverse space-x-3"
                              : "space-x-3"
                          }`}>
                          {payment.templateName}
                        </td>

                        <td className="py-5 px-6 whitespace-nowrap">
                          {payment.scheduledDate}
                        </td>
                        <td className="py-5 px-6 whitespace-nowrap">
                          {payment.usersAdded.length}
                        </td>
                        <td className="py-5 px-6 whitespace-nowrap">
                          {payment.type}
                        </td>
                        <td className="py-5 px-6 whitespace-nowrap">
                          {payment.totalAmount}
                        </td>
                      </tr>
                    </>
                  );
                })}
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
        <PayrollCard payment={cardPayment} />
      </div>
    </div>
  );
}

export default PayrollList;
