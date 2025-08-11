import React from "react";
import AddTransaction from "../components/Payroll/Transactions/AddTransaction";
import { useTranslation } from "react-i18next";
const AddToTransaction = () => {
  const { t } = useTranslation();
  return (
    <>
      <title>{t("Add To Transaction")}</title>
      <AddTransaction />;
    </>
  );
};

export default AddToTransaction;
