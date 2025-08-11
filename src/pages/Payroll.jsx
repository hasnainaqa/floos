import PayrollList from "../components/Payroll/PayrollList";
import { useTranslation } from "react-i18next";
export default function Payroll() {
  const { t } = useTranslation();
  return (
    <div>
      <title>{t("payroll")}</title>
      <PayrollList />
    </div>
  );
}
