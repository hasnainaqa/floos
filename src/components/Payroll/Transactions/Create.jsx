import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { Plus, Minus } from "lucide-react";
import Calendarr from "../../ui/Calendar";
import Clock from "../../ui/Clock";

function Create() {
  const location = useLocation();
  const selectedEmployees = location.state?.selectedEmployees || [];
  const [transactionData, setTransactionData] = useState(null);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
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

    setTransactionData({ ...data, users: updatedUsers });
    alert(
      `Transaction Created:\nTemplate: ${data.templateName}\n
      Users:\n${updatedUsers
        .map((u) => `• ${u.name}: ${u.amount} (${u.description})`)
        .join("\n")}`,
    );
    reset({
      templateName: "",
      payType: "bulk",
      users: [],
    });
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
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="flex flex-col lg:flex-row w-full gap-4">
          <div className="bg-white p-6 rounded-3xl w-full">
            <h2 className="text-xl font-semibold mb-6">Create Transaction</h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-12 gap-6">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Template Name"
                  // {...register("templateName", { required: true })}
                  {...register("templateName", {
                    required: "Template Name is required",
                  })}
                  className="bg-[#eef2ed] px-4 py-2 rounded-lg w-80 h-14 sm:w-[300px] outline-none"
                />
                {errors?.templateName && (
                  <p className="text-red-500 text-xs absolute">
                    {errors.templateName.message}
                  </p>
                )}
              </div>
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
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <img
                        src={field.img}
                        alt="User"
                        className="w-7 h-7 rounded-full"
                      />
                      <p className="font-normal mb-5">{field.name}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="h-5 w-5 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700"
                    >
                      <Minus size={16} />
                    </button>
                  </div>
                  <div className="flex space-x-3">
                    <div>
                      <input
                        type="number"
                        placeholder="Amount"
                        {...register(`users.${index}.amount`, {
                          required: "Amount is required",
                          min: {
                            value: 1,
                            message: "Enter the amount before submitting",
                          },
                        })}
                        className="bg-[#eef2ed] p-4 rounded-lg mb-4 outline-none [&::-webkit-inner-spin-button]:appearance-none"
                      />

                      {errors?.users?.[index]?.amount && (
                        <p className="text-red-500 text-xs absolute">
                          {errors.users[index].amount.message}
                        </p>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="Short Description"
                      {...register(`users.${index}.description`)}
                      className="bg-[#eef2ed] p-4 rounded-lg flex-1 mb-4 outline-none"
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
                <div className="mr-1 bg-[#54F439] hover:bg-[#89fb75] rounded-full p-1 font-thin flex items-center justify-center">
                  <Plus className="text-[#020500] h-4 w-4" size={14} />
                </div>
                Add User
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[35%]">
            <div className="bg-white rounded-3xl p-6">
              <h2 className="text-lg font-semibold mb-4">
                Schedule Date & Time
              </h2>
              <Calendarr />
              <Clock />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center justify-center px-3 py-3 rounded-[32px] text-sm font-semibold bg-[#54F439] text-black hover:bg-[#89fb75] mt-6"
          >
            Create Transaction
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
