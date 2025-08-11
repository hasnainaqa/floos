import React, { useRef } from "react";
import { ReactComponent as FileArrowUp } from "../../assets/icons/FileArrowUp.svg";

export default function UploadFile() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // You can add your file processing logic here
    }
  };

  return (
    <>
      <button
        className="h-10 w-10 bg-[#020500] rounded-full flex items-center justify-center flex-row"
        onClick={handleButtonClick}
      >
        <FileArrowUp className="text-white h-6 w-6" />
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".xls,.xlsx"
        className="hidden"
      />
    </>
  );
}
