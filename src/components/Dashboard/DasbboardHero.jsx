import DashboardChart from "./DashboardChart";
const DasbboardHero = () => {
  const heroCards = [
    "Total Employees",
    "New Employees Added To Payroll",
    "Added To Payroll",
    "Last Payroll Amount",
  ];

  // Computed values

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-3 gap-4">
        {heroCards.map((card, i) => (
          <div key={i} className="bg-[#FFFFFF] p-6 rounded-3xl">
            <p className="text-[#A6A6A6] text-sm">{card}</p>
            <h2 className="text-base text-[#15120F] font-medium mt-4">2,100</h2>
          </div>
        ))}
      </div>
      <DashboardChart />
    </div>
  );
};

export default DasbboardHero;
