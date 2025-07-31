import React from "react";
import Calendarr from "../../Calendar";
import Clock from "../../Clock";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function Create() {
  const [users, setUsers] = useState([
    {
      id: 2,
      name: "Arlene McCoy",
      amount: "",
      description: "",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 1,
      name: "Arlene McCoy",
      amount: "",
      description: "",
      img: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      id: 3,
      name: "Arlene McCoy",
      amount: "",
      description: "",
      img: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      id: 4,
      name: "Arlene McCoy",
      amount: "",
      description: "",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ]);
  const [templateName, setTemplateName] = useState("");
  const [payType, setPayType] = useState("bulk");


  const handleRemoveUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[100%] mx-auto gap-4">
      <div className="flex flex-col lg:flex-row w-full max-w-full mx-auto gap-4">
        <div className="bg-[#FFFFFF] p-6 rounded-xl w-full">
          <h2 className="text-xl font-semibold mb-6">Create Transaction</h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-12 gap-6">
            <div className="flex items-center ">
              <input
                type="text"
                placeholder="Template Name"
                className="bg-[#eef2ed] px-4 py-2 rounded-lg w-80 h-14 sm:w-[300px] outline-none"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-6 pl-1 gap-4">
              <label className="flex items-center space-x-2 cursor-pointer ">
                <input
                  type="radio"
                  name="payType"
                  checked={payType === "bulk"}
                  onChange={() => setPayType("bulk")}
                  className="accent-[#21A90A] h-5 w-5"
                />
                <span>Bulk Pay</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="payType"
                  checked={payType === "individual"}
                  onChange={() => setPayType("individual")}
                  className="accent-[#21A90A] h-5 w-5"
                />
                <span>Individual Pay</span>
              </label>
            </div>
          </div>

          {/* User Input Rows */}
          {users.map((user) => (
            <div
              key={user.id}
              className="flex space-x-3 ">
              <img src={user.img} alt="User" className="w-7 h-7 rounded-full" />
              <div className="flex-1">
                <div className="flex justify-between">
                <p className="font-normal mb-5">{user.name}</p>
                <div className="h-5 w-5 rounded-full bg-[#D30606] ">
              <button
                onClick={() => handleRemoveUser(user.id)}
                className="text-white hover:text-red-800">
                <Minus size={20} />
              </button>
                  </div>
              </div>
                <div className="flex space-x-3">
                  <input
                    type="number"
                    placeholder="Amount"
                    className="bg-[#eef2ed] px-4 py-2 rounded-lg w-48 h-14 mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Short Description"
                    className="bg-[#eef2ed] px-4 py-2 rounded-lg flex-1 outline-none mb-4"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Add User Button */}
          <div className="flex justify-end mt-6">
            <button
              className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Plus className="mr-1" size={16} />
              Add User
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[35%] bg-white rounded-3xl p-6">
          <h2 className="text-lg font-semibold mb-4">Schedule Date & Time</h2>
          {/* Calendar */}
          <Calendarr />
          {/* Time Display */}
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default Create;
