import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
const Dropdown = ({ options, value, onChange }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block text-left w-[200px]"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#E8EDE8] text-[#A6A6A6] text-sm font-normal leading-[100%] rounded-lg px-6 py-4 flex justify-between items-center cursor-pointer select-none"
      >
        {t(`ItemsPerPage.${value}`)} {t("Items Per Page")}
        <ChevronDown size={16} />
      </div>

      {isOpen && (
        <div className="absolute bottom-full mb-1 w-full bg-white rounded-md shadow z-10 max-h-[200px] overflow-y-auto">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => handleSelect(opt)}
              className="text-[#020500] px-4 py-3 hover:bg-[#F1F4F1] cursor-pointer text-sm"
            >
              {t(`ItemsPerPage.${opt}`)} {t("Items Per Page")}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
