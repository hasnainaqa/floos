import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { Plus, Minus } from "lucide-react";
import Calendarr from "../../Calendar";
import Clock from "../../Clock";

function Create() {
  const location = useLocation();
  const selectedEmployees = location.state?.selectedEmployees || [];
  const [popupData, setPopupData] = useState(null);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      templateName: "",
      payType: "bulk",
      users: selectedEmployees.map((u) => ({
        id: u.id,
        name: u.name,
        img: u.img,
        amount: "",
        description: "",
      })),
    },
  });

  const { fields, remove, append } = useFieldArray({ control, name: "users" });
  const allUsers = watch("users");
  const currentPayType = watch("payType");

  const onSubmit = (data) => {
    const updatedUsers =
      data.payType === "bulk"
        ? data.users.map((user) => ({
            ...user,
            amount: data.users[0].amount,
            description: data.users[0].description,
          }))
        : data.users;

    setPopupData({ ...data, users: updatedUsers });
  };
  const onError = (errors) => {
    // Show a custom alert if any required fields are missing
    alert("Please Enter Template Name and Amount before submitting!");
  };
  useEffect(() => {
    if (currentPayType === "bulk" && allUsers.length > 1) {
      const { amount, description } = allUsers[0];
      allUsers.forEach((_, index) => {
        if (index !== 0) {
          setValue(`users.${index}.amount`, amount);
          setValue(`users.${index}.description`, description);
        }
      });
    }
  }, [allUsers[0]?.amount, allUsers[0]?.description, currentPayType]);

  return (
    <div className="flex flex-col lg:flex-row w-full gap-4">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-col lg:flex-row w-full gap-4"
      >
        <div className="bg-white p-6 rounded-xl w-full">
          <h2 className="text-xl font-semibold mb-6">Create Transaction</h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-12 gap-6">
            <input
              type="text"
              placeholder="Template Name"
              {...register("templateName", { required: true })}
              className="bg-[#eef2ed] px-4 py-2 rounded-lg w-80 h-14 sm:w-[300px] outline-none"
            />
            <div className="flex items-center gap-4">
              {[
                { label: "Bulk Pay", value: "bulk" },
                { label: "Individual Pay", value: "individual" },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={option.value}
                    {...register("payType")}
                    className="accent-[#21A90A] h-5 w-5"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="flex space-x-3 mb-4">
              <img
                src={field.img}
                alt="User"
                className="w-7 h-7 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-normal mb-5">{field.name}</p>
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="h-5 w-5 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700"
                  >
                    <Minus size={16} />
                  </button>
                </div>
                <div className="flex space-x-3">
                  <input
                    type="number"
                    placeholder="Amount"
                    {...register(`users.${index}.amount`, {
                      required: "Amount is required",
                      min: {
                        value: 1,
                        message: "Amount must be greater than 0",
                      },
                    })}
                    {...register(`users.${index}.amount`, { required: true })}
                    className="bg-[#eef2ed] px-4 py-2 rounded-lg w-48 h-14 mb-4 outline-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  {errors?.users?.[index]?.amount && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.users[index].amount.message}
                    </p>
                  )}

                  <input
                    type="text"
                    placeholder="Short Description"
                    {...register(`users.${index}.description`)}
                    className="bg-[#eef2ed] px-4 py-2 rounded-lg flex-1 mb-4 outline-none"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-end mt-6 gap-2">
            <button
              type="button"
              onClick={() =>
                append({
                  id: Date.now(),
                  name: "New User",
                  img: "https://randomuser.me/api/portraits/lego/1.jpg",
                  amount: "",
                  description: "",
                })
              }
              className="flex items-center px-4 py-2  text-xs font-medium"
            >
              <div className="mr-1 bg-[#54F439] hover:bg-[#89fb75] rounded-full h-5 w-5 flex items-center justify-center">
                <Plus className="text-white h-4 w-4" size={16} />
              </div>
              Add User
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[35%]">
          <div className="bg-white rounded-3xl p-6">
            <h2 className="text-lg font-semibold mb-4">Schedule Date & Time</h2>
            <Calendarr />
            <Clock />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 rounded-[32px] text-sm font-semibold bg-[#54F439] text-black hover:bg-[#89fb75] mt-6"
            >
              Create Transaction
            </button>
          </div>
        </div>
      </form>

      {popupData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-4">Transaction Details</h3>
            <p>
              <strong>Template Name:</strong> {popupData.templateName}
            </p>
            <p>
              <strong>Pay Type:</strong> {popupData.payType}
            </p>
            <div className="mt-4 space-y-3 max-h-60 overflow-y-auto">
              {popupData.users.map((user, i) => (
                <div key={i} className="border-b pb-2">
                  <p>
                    <strong>Name:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Amount:</strong> {user.amount}
                  </p>
                  <p>
                    <strong>Description:</strong> {user.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setPopupData(null)}
                className="px-4 py-2 rounded-lg bg-[#54F439] text-black font-semibold hover:bg-[#89fb75]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Create;
