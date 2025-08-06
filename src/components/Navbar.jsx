import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; 
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const location = useLocation();
  const current = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);
  const navItems = [
    { label: "dashboard", path: "/" },
    { label: "employees", path: "/employees" },
    { label: "payroll", path: "/payroll" },
    { label: "transactions", path: "/transactions" },
  ];


  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div
  className={`w-full flex items-center justify-between mx-auto ${
    i18n.language === "ar" ? "flex-row-reverse" : ""
  }`}
>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F1F4F1] px-4 sm:px-8 lg:px-16 py-4 font-inter">
      <div className="w-full flex items-center justify-between  mx-auto">
        <div class="relative flex ">
          <Link to="/">
            <span class="text-[#54F439] font-semibold text-lg">{t("Floos")}</span>
          </Link>
        </div>
        <div className="flex bg-white rounded-full shadow-inner p-1 gap-1">
          <button
            onClick={() => changeLanguage("en")}
            className={`px-4 py-1.5 text-sm rounded-full transition-all ${
              i18n.language === "en"
                ? "bg-[#020500] text-white"
                : "bg-transparent text-black hover:bg-gray-100"
            }`}>
            EN
          </button>
          <button
            onClick={() => changeLanguage("ar")}
            className={`px-4 py-1.5 text-sm rounded-full transition-all ${
              i18n.language === "ar"
                ? "bg-[#020500] text-white"
                : "bg-transparent text-black hover:bg-gray-100"
            }`}>
            AR
          </button>
        </div>

        <div className="hidden md:flex bg-white rounded-full shadow-sm gap-2 p-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-7 py-3 text-base rounded-full transition-all ${
                (item.path === "/payroll" && current.startsWith("/payroll")) ||
                current === item.path
                  ? "bg-[#020500] text-white"
                  : "text-black hover:bg-gray-100"
              }`}>
              {t(item.label)}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white rounded-xl shadow-md p-3 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 text-sm rounded-md ${
                (item.path === "/payroll" && current.startsWith("/payroll")) ||
                current === item.path
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-100"
              }`}>
              {t(item.label)}
            </Link>
          ))}
        </div>
      )}
    </nav>
    </div>
  );
}
