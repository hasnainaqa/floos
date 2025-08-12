import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef } from "react";


export default function GenerateQr({qrValue}) {
  const qrCode = new QRCodeStyling({
    width: 182,
    height: 182,
    data: qrValue,
  
    qrOptions: {
      errorCorrectionLevel: "Q", 
      version: 10, 
    },
    margin: 4, 
    dotsOptions: {
      type: "dots",
      color: "#000000",
    },
    cornersSquareOptions: {
      type: "extra-rounded", 
      color: "#000000",
    },
    cornersDotOptions: {
      type: "dot", 
      color: "#000000",
    },
    backgroundOptions: {
      color: "#ffffff",
    },
  });
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  } ,[]);

  return <div ref={ref}></div>;
}
