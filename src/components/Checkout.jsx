import React, { useEffect, useState } from "react";
import GenerateQr from "./ui/GenrateQr";
import { ReactComponent as WalletIcon } from "../components/assets/icons/Wallet.svg";
import { useTranslation } from "react-i18next";
import { BadgeIcon } from "lucide-react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const CheckOut = () => {
  const { t } = useTranslation();
  const { invoiceId } = useParams(); 
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3NzFhOGY5LTg5YWEtNDMyYi1iNDgzLTFhMGY1ZmIwNDgyZiIsImlhdCI6MTc1NTEwMjc4NiwiZXhwIjoxNzU1NzA3NTg2fQ.7iUWyH7-4tR3PboyNmUEhbx8i5yNDP66xmJfxcjdE2I";

    axios
      .get(`http://213.232.203.198:3000/invoices/${invoiceId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOrder(res.data.data?.[0] || null); // ✅ pick first invoice
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data || "Error fetching invoice");
        setLoading(false);
      });
  }, [invoiceId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{JSON.stringify(error)}</p>;
  if (!order) return <p>No order found</p>;

  const totalAmount = order.amount || 0;
  const user = order.transaction?.fromUserDeposit?.user || {};

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-[45px] p-4 sm:p-9 justify-between font-inter">
      {/* Left Section */}
      <div className="w-full">
        <h2 className="pb-1 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#000000] ">
          {t("Bill Payment")}
        </h2>

        <div className="flex items-center justify-center flex-col lg:w-1/2 border border-[#F9FAFA] shadow shadow-[#F9FAFA] p-4 rounded-3xl mx-auto">
          <GenerateQr
            qrValue={`https://example.com/pay/${order.id}`}
            width={265}
            height={265}
          />
          <h2 className=" my-6 font-bold text-xl text-[#020500]">
            {t("Scan to Pay")}
          </h2>

          <div className="bg-white p-1 px-4 rounded-2xl border-[1px] border-[#9FC9A8] flex flex-row items-center ">
            <input
              type="text"
              placeholder="Or Enter bill number"
              value={order.id}
              readOnly
              className="p-2 w-full bg-transparent outline-none placeholder:text-black "
            />
            <BadgeIcon width={16} height={16} />
          </div>

          <div className="w-full flex justify-center">
            <button className="normalheight mt-6 w-full sm:w-auto bg-[#2EED0D] hover:bg-[#5fff43] text-[#ffffff] font-bold text-lg sm:text-xl md:text-2xl py-3 sm:py-4 px-4 rounded-xl flex flex-row items-center gap-2">
              <WalletIcon />
              {t("Open your Floos App")}
            </button>
          </div>
          <div className="flex flex-col items-center ">
            <h2 className="font-normal text-sm text-[#575757] mt-3 ">
              {t("You have 20 minutes to complete this Payment")}
            </h2>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex border border-[#F9FAFA] shadow shadow-[#F9FAFA] justify-top rounded-[24px] sm:rounded-[48px] p-6 pt-0 w-full lg:w-[600px] ">
        <div className="w-[calc(100%-24px)]">
          <div className="flex flex-col w-full ">
            <div
              className="flex flex-col justify-top items-center w-full backdrop-blur-sm pt-12"
              style={{
                background: `radial-gradient(circle at center, #B4FFBC 10%, transparent 70%)`,
              }}
            >
              <div className="flex items-center gap-4">
                <span className="h-3 w-3 bg-[#2EED0D] rounded-full"></span>
                <h2 className="font-medium text-xs sm:text-xl md:text-2xl text-[#575757] text-center">
                  {order.status} - Expires in 19:59
                </h2>
              </div>

              <h1 className="font-black text-4xl sm:text-5xl md:text-6xl mt-4">
                {totalAmount} SYP
              </h1>
              <div className="flex flex-col mt-4 text-xl gap-4 p-6 ">
                <span className="flex justify-start text-[#020500] ">
                  {t("Invoice ID")} :
                </span>
                <p className="text-[#020500]">{order.id}</p>
              </div>
            </div>
          </div>

          <div className="p-6 w-full">
            <div className="flex justify-start">
              <h2 className="font-semibold text-lg text-[#020500]">
                {t("Order Details")}
              </h2>
            </div>

            <div className="pt-2 font-normal text-sm">
              <div className="flex flex-row items-center justify-between mt-4">
                <span className="flex justify-start text-[#575757]">
                  {t("Email")}
                </span>
                <p className="text-[#020500]">{user.email}</p>
              </div>
              <div className="flex flex-row items-center justify-between mt-4">
                <span className="flex justify-start text-[#575757]">
                  {t("Description")}
                </span>
                <p className="text-[#020500]">{order.description}</p>
              </div>
              <div className="flex flex-row items-center justify-between mt-4">
                <span className="flex justify-start text-[#575757]">Date</span>
                <p className="text-[#020500]">{order.createdAt}</p>
              </div>
            </div>

            <hr className="mt-4 border-[#e4e3e3]" />
            <div className="mt-6 flex gap-3">
              <div>
                <img
                  src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div>
                <h2 className="font-semibold text-sm text-[#020500]">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="font-normal text-xs text-[#575757]">
                  {user.phone}
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <h2 className="font-semibold text-[16px] text-[#020500]">
                {t("Total")}
              </h2>
              <h2 className="font-semibold text-[16px] text-[#020500]">
                {totalAmount}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
