import EmployeesList from "../components/Employee/EmployeesList";
import { useTranslation } from "react-i18next";
export default function Employees() {
  const { t } = useTranslation();
  return (
    <div>
      <title>{t("Employees")}</title>
      <EmployeesList />
    </div>
  );
}
