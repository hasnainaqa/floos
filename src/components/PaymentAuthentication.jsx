import React from "react";
import GenerateQr from "./ui/GenrateQr";

import { useTranslation } from "react-i18next";

export const PaymentAuthentication = () => {
  const { t } = useTranslation();
  const order = {
    orderNumber: "132832-2323-223",
    email: "tim.jennings@example.com",
    currency: "SYP",
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
    discountsAndOffers: 0.0,
    tax: 0.0,
    grandTotal: 7000,
  };
  let totalAmount=0;
  for (let i = 0; i < order.items.length; i++) {
    totalAmount = order.items[i].price+totalAmount;
    
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-[45px] p-4 sm:p-9 justify-between">
      {/* Left Section */}
      <div className="flex items-center flex-col w-full lg:w-1/2 justify-start">
        <div>
          <h2 className="py-2 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#000000] ">
            {t("Let’s Make Payment")}
          </h2>
          <p className="font-normal sm:text-lg md:text-xl lg:text-2xl text-[#575757] mt-6 sm:mt-10 ">
            {t("To start your subscription, input your card details to make payment. You will be redirected to your banks authorization page.")}
          </p>
        </div>
        <div className="bg-white p-4 rounded-3xl my-12 sm:my-24 border-[1px] border-[#9FC9A8]">
          <GenerateQr qrValue="https://example.com" width={265} height={265} />
        </div>
        <div className="w-full flex justify-center">
          <button className="normalheight mt-6 w-full sm:w-auto bg-[#54F439] hover:bg-[#5fff43] text-[#FFFFFF] font-bold text-lg sm:text-xl md:text-2xl py-3 sm:py-4 px-10 sm:px-20 rounded-[10px]">
            {t("Cancel")}
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex bg-[#CAD9CA] rounded-[24px] sm:rounded-[48px] p-6 pt-0 sm:p-12 sm:pt-0 justify-center w-full lg:w-[503px]">
        <div className="flex flex-col justify-top items-center w-full">
        <div
        className="flex flex-col justify-top items-center w-full backdrop-blur-sm pt-12 pb-24"
        style={{
          background: `
          radial-gradient(circle at center, #38D848 20%, transparent 55%)

      
    `,
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
          <div className="w-full mt-2 sm:mt-0">
            {order.items.map((item, index) => (
              <div className="mb-8 sm:mb-12" key={index}>
                <div className="flex flex-wrap justify-between text-[#000000] items-center">
                  <h2 className="font-bold text-lg sm:text-xl md:text-[26px]">
                    {item.name}
                  </h2>
                  <h3 className="font-medium text-lg sm:text-xl md:text-2xl">
                    {item.price} SYP
                  </h3>
                </div>
                <p className="font-medium text-sm sm:text-base md:text-xl text-[#575757] mt-[3px]">
                  {t("Size")}: {item.size} {t("Color")}: {item.color}
                </p>
              </div>
            ))}
            <div className="flex justify-between text-[#000000] items-center ">
              <h2 className="font-bold text-lg sm:text-xl md:text-[26px]">
                {t("Discounts & Offers")}
              </h2>
              <h3 className="font-medium text-lg sm:text-xl md:text-2xl">
                {order.discountsAndOffers} SYP
              </h3>
            </div>
            <hr className="border-[#747474] mt-10 sm:mt-[77px]" />
            <div className="flex justify-between text-[#000000] items-center mt-6 sm:mt-10">
              <h2 className="font-bold text-lg sm:text-xl md:text-[26px]">Tax</h2>
              <h3 className="font-medium text-lg sm:text-xl md:text-2xl">
                {order.tax} SYP
              </h3>
            </div>
            <div className="flex justify-between text-[#000000] items-center mt-6 sm:mt-10">
              <h2 className="font-bold text-lg sm:text-xl md:text-[26px]">
                {t("Total")}
              </h2>
              <h3 className="font-medium text-lg sm:text-xl md:text-2xl">
                {totalAmount} SYP
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
