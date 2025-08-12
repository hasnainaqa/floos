import React from "react";
import Create from "../components/Payroll/Transactions/Create";
import { useTranslation } from "react-i18next";
const CreateTransaction = () => {
  const { t } = useTranslation();

  return (
    <>
      <title>{t("Create Transaction")}</title>
      <Create />
    </>
  );
};

export default CreateTransaction;
