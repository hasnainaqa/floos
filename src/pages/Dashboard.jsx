import React from "react";
import EmployeesList from "../components/Employee/EmployeesList";
import DasbboardHero from "../components/Dashboard/DasbboardHero";

import { useTranslation } from "react-i18next";
export default function Dashboard() {
  const { t } = useTranslation();
  return (
    <>
      <title>{t("dashboard")}</title>
      <DasbboardHero />
      <EmployeesList limit={5} />
    </>
  );
}
