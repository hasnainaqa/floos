import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Floos404 from "../components/assets/icons/floos-404.svg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#F1F4F1] text-gray-800 overflow-hidden p-6 font-inter">
      <title>Page Not Found</title>

      {/* Soft green glow */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#54F439]/40 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#54F439]/40 rounded-full blur-[100px] animate-pulse"></div>

      <div className="mb-6 animate-float">
        <img
          src={Floos404}
          alt="Floos 404"
          className="w-80 mx-auto drop-shadow-[0_0_8px_rgba(84,244,57,0.25)]"
        />
      </div>

      <h1 className="text-7xl font-extrabold bg-gradient-to-r from-[#a8f59a] to-[#34e10f] bg-clip-text text-transparent">
        404
      </h1>
      <p className="mt-4 text-lg text-[#020500] text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Info Tag */}
      <div className="mt-5 px-6 py-2 bg-white border border-[#54F439]/20 rounded-full shadow-sm">
        <span className="text-[#54F439] font-semibold">
          Floos — Payroll Transaction
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-8 flex items-center gap-2 px-8 py-3 bg-[#54F439]  text-[#020500] font-normal rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#54F439]"
      >
        <ArrowLeft size={18} />
        Go Back Home
      </button>


      {/* Animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;