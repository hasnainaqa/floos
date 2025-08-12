import React from "react";
import { ReactComponent as Clock } from "../../assets/icons/Clock.svg";
import { useTranslation } from "react-i18next";

import GenrateQr from "../../ui/GenrateQr";

const TransactionError = () => {
  const { t } = useTranslation();
  const OrderDetails = {
    name: "Zara",
    email: "thuhang.nute@gmail.com",
    paymentmethod: "15.30 SYP",
    invoiceId: "asnb16717289amsjkjle9011xmna1111xkal",
    DateTime: "15 May 2020 8:00 am",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    TransactionID: "thuhang.nute@gmail.com",
    paidamount: "15.00SYP",
    phone: "98320 8298 000",
    qrValue: "https://floos-gilt.vercel.app/"
  };
  return (
    <div className="flex lg:flex-row flex-col gap-5">
      <div className="flex-1 justify-center bg-[#FFFFFF] rounded-[20px] px-20 py-[30px]">
        <div className="rounded-[20px] bg-[#F1F4F1] py-6 flex flex-col items-center ">
          <Clock />
          <h2 className="font-semibold text-[16px] text-[#020500] mt-4">
            {t("Payment not Received in Time")}
          </h2>
          <h2 className="font-normal text-sm text-[#575757] mt-2 px-2">
            {t("We couldn’t process your payment within the expected time.")}
          </h2>
        </div>

        <div className=" py-6 flex flex-col items-center gap-2">
          <h2 className="font-semibold text-lg text-[#020500]">
            {t("QR Code")}
          </h2>
    <GenrateQr qrValue = {OrderDetails.qrValue} />
        </div>
      </div>
      <div
        className="lg:w-[40%] rounded-[20px] p-6 backdrop-blur-sm"
        style={{
          background: `
          radial-gradient(circle at center left, #FCF7D6 20%, transparent 40%),
          radial-gradient(circle at top left, #FCF7D6 10%, transparent 15%),
          radial-gradient(circle at bottom left, #FFFFFF 20%, transparent 25%),
          radial-gradient(circle at center right, #CCFCC4 25%, transparent 60%),
          radial-gradient(circle at bottom right, #FFFFFF 90%, transparent 100%),
          radial-gradient(circle at top center, #FFFFFF 30%, transparent 60%),
          linear-gradient(to bottom, #FFFFFF 0%, transparent 60%)

      
    `,
          backgroundBlendMode: "normal",
        }}>
        <div className="flex justify-center items-center">
          <h2 className="font-semibold text-lg text-[#020500]">
            {t("Order Details")}
          </h2>
        </div>
        <div className="pt-2 font-normal text-sm">
          <div className="flex flex-col mt-4">
            <span className="flex justify-start text-[#575757]">
              {t("Email")}
            </span>
            <p className="text-[#020500] mt-2">{OrderDetails.email}</p>
          </div>
          <div className="flex flex-col mt-4">
            <span className="flex justify-start text-[#575757]">
              {t("Payment Method")}
            </span>
            <p className="text-[#020500] mt-2">{OrderDetails.paymentmethod}</p>
          </div>
          <div className="flex flex-col mt-4">
            <span className="flex justify-start text-[#575757]">
              {t("Invoice ID")}
            </span>
            <p className="text-[#020500] mt-2">{OrderDetails.invoiceId}</p>
          </div>
          <div className="flex flex-col mt-4">
            <span className="flex justify-start text-[#575757]">
              {t("Date")}
            </span>
            <p className="text-[#020500] mt-2">{OrderDetails.DateTime}</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <div>
            <img
              src={OrderDetails.img}
              alt={OrderDetails.name}
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div>
            <h2 className="font-semibold text-sm text-[#020500]">
              {OrderDetails.name}
            </h2>
            <p className="font-normal text-xs text-[#575757]">
              {OrderDetails.phone}
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <h2 className="font-semibold text-[16px] text-[#020500]">
            {t("Total")}
          </h2>
          <h2 className="font-semibold text-[16px] text-[#020500]">
            {OrderDetails.paidamount}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TransactionError;
