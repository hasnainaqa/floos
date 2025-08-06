import DashboardChart from "./DashboardChart";
import { useTranslation } from "react-i18next";


const DasbboardHero = () => {
  const { t } = useTranslation();


  const heroCards = [
    { tital: "Total Employees", value: 2200 },
    { tital: "New Employees Added To Payroll", value: 2100 },
    { tital: "Added To Payroll", value: 2300 },
    { tital: "Last Payroll Amount", value: 2400 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-6">

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-3 gap-4">
        {heroCards.map((card, i) => (
          <div key={i} className="bg-[#FFFFFF] p-6 rounded-3xl">
            <p className="text-[#A6A6A6] text-sm">{t(card.tital)}</p>
            <h2 className="text-base text-[#15120F] font-medium mt-4">
              {card.value}
            </h2>
          </div>
        ))}
      </div>
      <DashboardChart />
    </div>
  );
};

export default DasbboardHero;
