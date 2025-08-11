import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Dropdown from "./Dropdown";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row md:flex-row items-center space-x-2 p-4 bg-[#F1F4F1] font-['Public Sans'] text-sm font-medium leading-[20px] gap-4 ">
      <Dropdown
        options={[5, 10, 15, 20, 30, 50, 100, "All"]}
        value={itemsPerPage}
        onChange={(val) => onItemsPerPageChange(val)}
      />

      <div className="flex gap-2">
        <button
          className={`w-[42px] h-[42px] flex items-center justify-center rounded-[26px] text-sm font-medium leading-[20px] ${
            currentPage === 1
              ? "text-[#A6A6A6] bg-[#E8EDE8] cursor-not-allowed"
              : "bg-white text-black hover:bg-[#E8EDE8]"
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}>
          <ChevronLeft size={16} />
        </button>

        {pageNumbers.map((page, idx) => (
          <button
            key={idx}
            onClick={() => onPageChange(page)}
            className={`w-[42px] h-[42px] flex items-center justify-center rounded-[26px] text-sm font-medium leading-[20px] ${
              currentPage === page
                ? "bg-[#54F439] text-black"
                : "bg-white text-black hover:bg-[#E8EDE8]"
            }`}>
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          className={`w-[42px] h-[42px] flex items-center justify-center rounded-[26px] text-sm font-medium leading-[20px] ${
            currentPage === totalPages
              ? "text-[#A6A6A6] bg-[#E8EDE8] cursor-not-allowed"
              : "bg-[#54F439] text-black hover:bg-[#52ff34]"
          }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
