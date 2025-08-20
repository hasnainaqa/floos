import React from "react";
import GenerateQr from "./ui/GenrateQr";
import { useTranslation } from "react-i18next";
import Timer from "./Timer";
import { BadgeIcon } from "lucide-react";
import { ReactComponent as WalletIcon } from "../components/assets/icons/Wallet.svg";
import moment from "moment";
export const CheckOut = ({ order, status, loading, error }) => {
  const { t } = useTranslation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{JSON.stringify(error)}</p>;
  if (!order) return <p>No order found</p>;
  if (status === "Paid") return <p>Already Paid</p>;

  const totalAmount = order.amount || 0;
  const user = order.merchant || {};

  const qrvalue = JSON.stringify({
    phone: user.phone,
    amount: totalAmount,
    description: order.description,
    invoiceId: order.id,
  });

  return (
  <div className="flex flex-col-reverse lg:flex-row gap-[45px] p-4 sm:p-9 justify-between font-inter">
    {/* Left Section */}
    <div className="w-full">
      <h2 className="pb-1 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#000000] text-center lg:text-left">
        {t("Bill Payment")}
      </h2>

      <div className="flex items-center justify-center flex-col w-full lg:w-1/2 border border-[#F9FAFA] shadow shadow-[#F9FAFA] p-4 rounded-3xl mx-auto">
        <GenerateQr qrValue={qrvalue} width={220} height={220} />
        <h2 className="my-6 font-bold text-lg sm:text-xl text-[#020500] text-center">
          {t("Scan to Pay")}
        </h2>

        <div className="bg-white p-1 px-4 rounded-2xl border border-[#9FC9A8] flex flex-row items-center  max-w-[300px] sm:max-w-none">
          <input
            type="text"
            placeholder="Or Enter bill number"
            readOnly
            className="p-2 w-full bg-transparent outline-none placeholder:text-black text-sm sm:text-base"
          />
          <BadgeIcon width={16} height={16} />
        </div>

        <div className="w-full flex justify-center">
          <button className="normalheight mt-6 w-full sm:w-auto bg-[#2EED0D] hover:bg-[#5fff43] text-white font-bold text-lg sm:text-xl md:text-2xl py-3 sm:py-4 px-4 rounded-xl flex flex-row items-center justify-center gap-2">
            <WalletIcon />
            {t("Open your Floos App")}
          </button>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-normal text-xs sm:text-sm text-[#575757] mt-3 text-center">
            {t("You have 20 minutes to complete this Payment")}
          </h2>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex border border-[#F9FAFA] shadow shadow-[#F9FAFA] justify-top rounded-[24px] sm:rounded-[48px] sm:p-6 pt-0 w-full lg:w-[600px]">
      <div className="w-full">
        <div className="flex flex-col w-full">
          <div
            className="flex flex-col justify-top items-center w-full backdrop-blur-sm pt-8 sm:pt-12 px-2 sm:px-6 text-center"
            style={{
              background: `radial-gradient(circle at center, #B4FFBC 10%, transparent 70%)`,
            }}>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#2EED0D] rounded-full"></span>
              <Timer />
            </div>

            <h1 className="font-black text-3xl sm:text-5xl md:text-6xl mt-3 sm:mt-4">
              {order.amount} SYP
            </h1>

            <div className="flex flex-col mt-4 text-base sm:text-xl gap-3 sm:gap-4 p-4 sm:p-6 text-left w-full">
              <span className="text-[#020500]">{t("Invoice ID")} :</span>
              <p className="text-[#020500] break-words">{order.id}</p>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 w-full">
          <div className="flex justify-start">
            <h2 className="font-semibold text-base sm:text-lg text-[#020500]">
              {t("Order Details")}
            </h2>
          </div>

          <div className="pt-2 font-normal text-sm sm:text-base">
            <div className="flex flex-row items-center justify-between mt-4 gap-2">
              <span className="text-[#575757]">{t("Email")}</span>
              <p className="text-[#020500] break-all text-right">{user.email}</p>
            </div>

            <div className="flex flex-row items-center justify-between mt-4 gap-2">
              <span className="text-[#575757]">{t("Description")}</span>
              <p className="text-[#020500] text-right">{order.description}</p>
            </div>

            <div className="flex flex-row items-center justify-between mt-4 gap-2">
              <span className="text-[#575757]">Date</span>
              <p className="text-[#020500] text-right">
                {moment(order.createdAt).format("LL")}
              </p>
            </div>
          </div>

          <hr className="mt-4 border-[#e4e3e3]" />

          <div className="mt-6 flex gap-3 items-center">
            <img
              src={
                user.img ||
                `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`
              }
              alt={`${user.firstName} ${user.lastName}`}
              className="h-10 w-10 rounded-full"
            />
            <div className="min-w-0">
              <h2 className="font-semibold text-sm text-[#020500] truncate">
                {user.firstName} {user.lastName}
              </h2>
              <p className="font-normal text-xs text-[#575757] truncate">
                {user.phone}
              </p>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <h2 className="font-semibold text-sm sm:text-base text-[#020500]">
              {t("Total")}
            </h2>
            <h2 className="font-semibold text-sm sm:text-base text-[#020500]">
              {totalAmount}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};
