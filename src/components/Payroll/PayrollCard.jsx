import React from "react";
import { Calendar, Users, DollarSign, Pencil, Clipboard } from "lucide-react";
import { Link } from "react-router-dom";
const PayrollCard = ({ payment }) => {
  if (!payment) return null;

  const addedUsers = payment.addedUsers || [
    {
      name: "Eleanor Pena",
      img: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      name: "Ralph Edwards",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Savannah Nguyen",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      name: "Marvin McKinney",
      img: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      name: "Cody Fisher",
      img: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
      name: "Robert Fox",
      img: "https://randomuser.me/api/portraits/men/36.jpg",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] rounded-[32px] p-6 relative">
      <button className="absolute top-6 right-6 bg-[#54F439] p-3 rounded-full hover:bg-[#52ff34] transition w-10 h-10">
        <Pencil size={16} className="text-[#020500] " />
      </button>

      <div className="flex justify-center">
        <div className="w-[85px] h-[85px] bg-gray-100 rounded-full flex items-center justify-center">
          <Clipboard className="w-10 h-10 text-[#575757]" />
        </div>
      </div>

      <h3 className="text-center text-[#020500] font-semibold mt-4 text-lg">
        {payment.templateName}
      </h3>

      <div className="mt-9 space-y-4">
        <h4 className="text-sm text-[#020500] font-medium">Information</h4>
        <div className="flex items-center gap-3 text-sm text-[#020500]">
          <Calendar size={16} />
          <span>{payment.scheduledDate}</span>
        </div>
        <div className="flex items-center gap-3  text-sm text-[#020500]">
          <Users size={16} />
          <span>{payment.usersAdded}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-[#020500]">
          <DollarSign size={16} />
          <span>{payment.totalAmount}</span>
        </div>
      </div>

      {/* Added Users */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h4 className="text-sm text-[#020500] font-medium">Added Users</h4>
          <Link
            to="#"
            className="text-[#21A90A] text-sm font-medium hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="mt-4 overflow-hidden">
          {addedUsers.map((user, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 h-15 border-b border-[#EAECF0]  hover:bg-gray-100"
            >
              <img
                src={user.img}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-[#020500]">{user.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PayrollCard;
