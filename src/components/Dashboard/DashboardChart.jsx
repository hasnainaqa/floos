import React from "react";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useTranslation } from "react-i18next";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-xl shadow-lg text-xs text-gray-800">
        <p className="flex items-center gap-1 text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
          {label}
        </p>
        <p className="font-semibold">{payload[0].value} SYP</p>
      </div>
    );
  }
  return null;
};
const DashboardChart = () => {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState("M");

  const chartData = {
    D: [
      { label: "Jul 1", value: 20 },
      { label: "Jul 2", value: 40 },
      { label: "Jul 3", value: 35 },
      { label: "Jul 4", value: 50 },
      { label: "Jul 5", value: 45 },
    ],
    M: [
      { month: "Jan", value: 60 },
      { month: "Feb", value: 90 },
      { month: "Mar", value: 95 },
      { month: "Apr", value: 80 },
      { month: "May", value: 100 },
      { month: "Jun", value: 70 },
      { month: "Jul", value: 60 },
      { month: "Aug", value: 75 },
      { month: "Sep", value: 85 },
      { month: "Oct", value: 80 },
      { month: "Nov", value: 85 },
      { month: "Dec", value: 80 },
    ],
    Y: [
      { year: "2020", value: 300 },
      { year: "2021", value: 350 },
      { year: "2022", value: 400 },
      { year: "2023", value: 450 },
      { year: "2024", value: 480 },
    ],
  };
  const data = chartData[activeView];
  const activeIndex = data.findIndex((entry) => entry.value === 100);
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const maxValue = Math.max(...data.map((d) => d.value));
  const increasePercent =
    ((maxValue - total / data.length) / (total / data.length)) * 100;

  return (
    <div className="bg-[#FFFFFF] p-4 rounded-3xl lg:col-span-3">
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-[#A6A6A6] text-sm">{t("Salaries Dispersed")}</p>
          <h2 className="text-2xl text-[#020500] font-normal">
            {maxValue} SYP{" "}
            <span className="text-green-500 text-sm">
              +{increasePercent.toFixed(0)}%
            </span>
          </h2>
        </div>

        <div className="flex items-center space-x-1 text-xs font-medium">
          {["D", "M", "Y"].map((v) => (
            <button
              key={v}
              onClick={() => setActiveView(v)}
              className={`w-6 h-6 flex items-center justify-center rounded-md transition text-[#020500] ${
                activeView === v ? "bg-[#54F439] " : "hover:bg-gray-200"
              }`}
            >
              {t(v)}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-40">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis
              dataKey={
                activeView === "M"
                  ? "month"
                  : activeView === "Y"
                    ? "year"
                    : "label"
              }
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" barSize={14}>
              {data.map((entry, index) => (
                <Cell
                  key={`bar-${index}`}
                  fill={index === activeIndex ? "#00C851" : "#000"}
                  radius={[10, 10, 0, 0]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;
