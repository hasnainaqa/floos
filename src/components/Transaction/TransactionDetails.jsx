import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const TransactionDetails = ({ popupData, onClose }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-40 z-40"></div>

      <div className="fixed top-1/2 left-1/2 lg:w-[449px] md:w-[449px] w-[90%] -translate-x-1/2 -translate-y-1/2 text-[#020500] bg-white rounded-2xl z-50 p-[60px] text-center font-inter">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-xl font-bold">
          &times;
        </button>

        <h2 className="flex justify-start font-semibold text-2xl">
          Transaction Detail{" "}
        </h2>
        <img
          src={popupData.img}
          alt=""
          className="h-20 w-20 rounded-full mt-4"
        />
        <div className="pt-6 font-normal text-[16px]">
          <div className="flex  mt-4">
            <span className="flex justify-start text-[#A6A6A6] w-40">
              {t("Name")}
            </span>
            <p className="">{popupData.name}</p>
          </div>
          <hr className="mt-4 border border-[#A6A6A6]"></hr>
          <div className="flex  mt-4">
            <span className="flex justify-start text-[#A6A6A6] w-40">
              {t("Designation")}
            </span>
            <p className="">{popupData.designation}</p>
          </div>
          <hr className="mt-4 border-[1px] border-[#A6A6A6]"></hr>
          <div className="flex  mt-4">
            <span className="flex justify-start text-[#A6A6A6] w-40">
              {t("Emai")}
            </span>
            <p className="">{popupData.email}</p>
          </div>
          <hr className="mt-4 border-[1px] border-[#A6A6A6]"></hr>
          <div className="flex  mt-4">
            <span className="flex justify-start text-[#A6A6A6] w-40">
              {t("Amount")}
            </span>
            <p className="">{popupData.amount}</p>
          </div>
          <hr className="mt-4 border-[1px] border-[#A6A6A6]"></hr>
          <div className="flex  mt-4">
            <span className="flex justify-start text-[#A6A6A6] w-40">
              {t("Date & Time")}
            </span>
            <p className="">{popupData.DateTime}</p>
          </div>
          <hr className="mt-4 border-[1px] border-[#A6A6A6]"></hr>
          <div className="flex  mt-4">
            <span className="flex justify-start text-[#A6A6A6] w-40">
              {t("Transaction ID")}
            </span>
            <p className="">{popupData.TransactionID}</p>
          </div>
          <hr className="mt-4 border-[1px] border-[#A6A6A6]"></hr>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default TransactionDetails;
