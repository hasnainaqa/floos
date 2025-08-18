import React from "react";
import GenerateQr from "./ui/GenrateQr";
import { ReactComponent as Clock } from "./assets/icons/Clock.svg";
// import { ReactComponent as BackIcon } from "./assets/icons/icon.svg";
import { Copy } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
export const PaymentBill = () => {
  const { t } = useTranslation();
  const order = {
    orderNumber: "132832-2323-223",
    email: "tim.jennings@example.com",
    items: [
      {
        name: "Item 1",
        size: "m",
        color: "Red",
        price: 5000,
      },
      {
        name: "Item 2",
        size: "m",
        color: "Blue",
        price: 2000,
      },
    ],
  };
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
    qrValue: "https://floos-gilt.vercel.app/",
    billnumber: 438429382433434,
  };
  let totalAmount = 0;
  for (let i = 0; i < order.items.length; i++) {
    totalAmount = order.items[i].price + totalAmount;
  }
  const notify = () => toast.success("Bill number copied to clipboard");
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-[45px] p-4 sm:p-9 justify-between font-inter">
      {/* Left Section */}
      <div className="flex items-center flex-col w-full lg:w-1/2 justify-start">
        <div>
          {/* <button className="p-6 px-20 border border-white rounded-[10px] text-white flex flex-row items-center gap-1 font-bold text-2xl mb-1">
            <BackIcon />
            Back
          </button> */}
          <h2 className="pb-1 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#000000] ">
            {t("Bill Payment")}
          </h2>
          <p className="font-normal sm:text-lg md:text-xl lg:text-xl text-[#575757] ">
            {t(
              "Scan this QR on your Floos App and proceed with the payment or simply open the Floos app with the button and proceed with paying."
            )}
          </p>
        </div>
        <div className=" flex flex-col items-center ">
          <Clock />
          <h2 className="font-semibold text-[16px] text-[#020500] mt-4 px-2">
            {t("Payment Pending")}
          </h2>
          <h2 className="font-normal text-sm text-[#575757] mt-3 ">
            {t(
              "You have 20 minutes to proceed with this payment before this bill is cancelled."
            )}
          </h2>
        </div>

        <h2 className=" my-6 font-semibold text-lg text-[#020500]">{t("Scan QR")}</h2>
        <div className="bg-white p-4 rounded-3xl border-[1px] border-[#9FC9A8]">
          <GenerateQr qrValue="https://example.com" width={265} height={265} />
        </div>
        <h2 className=" my-3 font-semibold text-lg text-[#020500] text-center">
          {t("OR")} <br />
          {t("Manually paste this bill number")}
        </h2>

        <div className="bg-white p-1 px-10 rounded-3xl border-[1px] border-[#9FC9A8] flex flex-row ">
          <h2 className="pr-8">{OrderDetails.billnumber} </h2>
          <Copy
            width={16}
            height={16}
            className="cursor-pointer"
            onClick={() => {
              window.navigator.clipboard.writeText(OrderDetails.billnumber);
              notify();
            }}
          />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
        <div className="w-full flex justify-center">
          <button className="normalheight mt-6 w-full sm:w-auto bg-[#54F439] hover:bg-[#5fff43] text-[#000000] font-bold text-lg sm:text-xl md:text-2xl py-3 sm:py-4 px-10 sm:px-20 rounded-[10px]">
            {t("Open your Floos App")}
          </button>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex bg-[#CAD9CA]  justify-top rounded-[24px] sm:rounded-[48px] p-6  pt-0 w-full lg:w-[513px] ">
        <div className="w-[calc(100%-24px)]">
          <div className="flex flex-col w-full ">
            <div
              className="flex flex-col justify-top items-center w-full backdrop-blur-sm pt-12 pb-20"
              style={{
                background: `
              radial-gradient(circle at center, #38D848 15%, transparent 55%)`,
                backgroundBlendMode: "normal",
              }}>
              <h className="font-medium text-lg sm:text-xl md:text-2xl text-[#575757] text-center">
                {t("Order Number")}:
                <br /> {order.orderNumber}
              </h>
              <p className="text-[#020500] font-semibold text-xs sm:text-sm mt-1">
                {order.email}
              </p>
              <h1 className="font-black text-4xl sm:text-5xl md:text-6xl mt-4">
                {totalAmount} SYP
              </h1>
            </div>
          </div>
          <div className="p-6 pt-0 w-full">
            <div className="flex justify-start">
              <h2 className="font-semibold text-lg text-[#020500]">
                {t("Order Details")}
              </h2>
            </div>
            <div className="pt-2 font-normal text-sm">
              <div className="flex flex-col mt-4">
                <span className="flex justify-start text-[#575757]">{t("Email")}</span>
                <p className="text-[#020500] mt-2">{OrderDetails.email}</p>
              </div>
              <div className="flex flex-col mt-4">
                <span className="flex justify-start text-[#575757]">
                  {t("Payment Method")}
                </span>
                <p className="text-[#020500] mt-2">
                  {OrderDetails.paymentmethod}
                </p>
              </div>
              <div className="flex flex-col mt-4">
                <span className="flex justify-start text-[#575757]">
                  {t("Invoice ID")}
                </span>
                <p className="text-[#020500] mt-2">{OrderDetails.invoiceId}</p>
              </div>
              <div className="flex flex-col mt-4">
                <span className="flex justify-start text-[#575757]">Date</span>
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
            <hr className="mt-4 border-[#A6A6A6] ml-6" />

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
