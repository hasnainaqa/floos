import React from "react";
import TransactionPage from "../components/Transaction/TransactionPage";

import { useTranslation } from "react-i18next";
const Transactions = () => {
  const { t } = useTranslation();
  return (
    <>
      <title>{t("Transactions")}</title>
      <TransactionPage />
    </>
  );
};

export default Transactions;
