import React, { useEffect, useState } from "react";
import { Phone, Mail, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EmployeeCard = ({ employee }) => {
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  useEffect(() => {
    setSelectedEmployees(employee);
  }, [employee]);
  const { t } = useTranslation();
  if (!employee) return null;

  return (
    <div className="bg-white rounded-3xl ml-2 p-6 w-full  text-left flex flex-col items-center space-y-4">
      <img
        src={employee.img}
        alt={employee.name}
        className="w-24 h-24 rounded-full object-cove "
      />

      <div className="text-center">
        <h4 className="text-base font-semibold ">{employee.name}</h4>
        <p className="text-gray-500 text-sm p-1 pb-0">{employee.designation}</p>
      </div>

      <div className="w-full space-y-3 text-sm text-gray-700">
        <div className="gap-2 text-black">
          <span>{t("Information")}</span>
        </div>
        <div className="flex items-center gap-2 p-2 pt-0">
          <Phone size={16} />
          <span>{employee.phone}</span>
        </div>
        <div className="flex items-center gap-2 p-2">
          <Mail size={16} />
          <span>{employee.email}</span>
        </div>
        <div className="flex items-center gap-2 p-2">
          <DollarSign size={16} />
          <span>1000</span>
        </div>
      </div>

      <Link
        to="/payroll/createtransaction"
        state={{ selectedEmployees }}
        className="bg-[#54F439] w-full text-center text-black py-3 mt-4
        rounded-full hover:bg-[#52ff34] normalheight"
      >
        <button>{t("Pay Now")}</button>
      </Link>
    </div>
  );
};

export default EmployeeCard;
