import React, { useEffect, useState } from "react";
import PayrollCard from "./PayrollCard";
import { Link } from "react-router-dom";

function PayrollList() {
  const [cardPayment, setCardPayment] = useState(null);

  const payments = [
    {
      templateName: "Salaries",
      scheduledDate: "Mar 20, 2019 23:14",
      usersAdded: 100,
      type: "Batch Payment",
      totalAmount: "$328.85",
    },
    {
      templateName: "Bonus",
      scheduledDate: "Dec 7, 2019 23:26",
      usersAdded: 1,
      type: "Individual",
      totalAmount: "$779.58",
    },
    {
      templateName: "Vacation",
      scheduledDate: "Dec 30, 2019 05:18",
      usersAdded: 96,
      type: "Batch Payment",
      totalAmount: "$948.55",
    },
    {
      templateName: "Salaries",
      scheduledDate: "Feb 2, 2019 19:28",
      usersAdded: 40,
      type: "Batch Payment",
      totalAmount: "$943.65",
    },
    {
      templateName: "Salaries",
      scheduledDate: "Dec 7, 2019 23:26",
      usersAdded: 34,
      type: "Batch Payment",
      totalAmount: "$106.58",
    },
    {
      templateName: "Vacation",
      scheduledDate: "Dec 30, 2019 05:18",
      usersAdded: 1,
      type: "Individual",
      totalAmount: "$589.99",
    },
    {
      templateName: "Bonus",
      scheduledDate: "Dec 30, 2019 07:52",
      usersAdded: 16,
      type: "Batch Payment",
      totalAmount: "$169.43",
    },
    {
      templateName: "Bonus",
      scheduledDate: "Feb 2, 2019 19:28",
      usersAdded: 50,
      type: "Batch Payment",
      totalAmount: "$630.44",
    },
    {
      templateName: "Salaries",
      scheduledDate: "Dec 30, 2019 05:18",
      usersAdded: 87,
      type: "Batch Payment",
      totalAmount: "$202.87",
    },
    {
      templateName: "Salaries",
      scheduledDate: "Feb 2, 2019 19:28",
      usersAdded: 92,
      type: "Batch Payment",
      totalAmount: "$351.02",
    },
    {
      templateName: "Salaries",
      scheduledDate: "Dec 4, 2019 21:42",
      usersAdded: 91,
      type: "Batch Payment",
      totalAmount: "$475.22",
    },
  ];

  function onClick(payment) {
    setCardPayment(payment);
  }

  useEffect(() => {
    setCardPayment(payments[0]);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[100%] mx-auto gap-4">
      <div className="w-full lg:w-[75%] bg-white rounded-3xl font-inter">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6">
          <h3 className="font-semibold text-lg">Payroll Template</h3>
          <Link to="/addtransaction">
            <button className="bg-[#54F439] text-black px-4 py-2 rounded-full hover:bg-[#52ff34] text-sm sm:text-base">
              Create Transaction
            </button>
          </Link>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                {Object.keys(payments[0]).map((key, index) => {
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
                      className="p-6 pt-0 capitalize font-normal whitespace-nowrap"
                    >
                      {labels[key] || key}
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {payments.map((payment, i) => (
                <tr
                  key={i}
                  onClick={() => onClick(payment)}
                  className="border-b border-[#D9D9D9] hover:bg-[#F1F4F1] cursor-pointer text-[14px] font-normal w-[984px] h-[60px] max-w-full"
                >
                  <td className="flex items-center space-x-3 py-3 px-6 ">
                    {payment.templateName}{" "}
                  </td>
                  <td className="py-5 px-6 whitespace-nowrap">
                    {payment.scheduledDate}
                  </td>
                  <td className="py-5 px-6 whitespace-nowrap">
                    {payment.usersAdded}
                  </td>
                  <td className="py-5 px-6 whitespace-nowrap">
                    {payment.type}
                  </td>
                  <td className="py-5 px-6 whitespace-nowrap">
                    {payment.totalAmount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full lg:w-[25%]">
        {cardPayment && <PayrollCard payment={cardPayment} />}
      </div>
    </div>
  );
}

export default PayrollList;
