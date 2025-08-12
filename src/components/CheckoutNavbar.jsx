import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ReactComponent as WalletIcon } from "../components/assets/icons/Wallet.svg";
import { useTranslation } from "react-i18next";

export default function CheckoutNavbar() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

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
          <div className="relative flex ">
            <Link to="/">
              <div className="flex items-center gap-2">
                <WalletIcon />
                <span className="text-[#54F439] font-semibold text-lg">
                  {t("Floos")}
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center lg:gap-4">
            <div className="flex bg-white rounded-full shadow-inner p-1 gap-1">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-4 py-1.5 text-sm rounded-full transition-all ${
                  i18n.language === "en"
                    ? "bg-[#020500] text-white"
                    : "bg-transparent text-black hover:bg-gray-100"
                }`}
              >
                {t("EN")}
              </button>
              <button
                onClick={() => changeLanguage("ar")}
                className={`px-4 py-1.5 text-sm rounded-full transition-all ${
                  i18n.language === "ar"
                    ? "bg-[#020500] text-white"
                    : "bg-transparent text-black hover:bg-gray-100"
                }`}
              >
                {t("AR")}
              </button>
            </div>

          </div>
        </div>

      </nav>
    </div>
  );
}
