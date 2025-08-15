import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Floos404 from "../components/assets/icons/floos-404.svg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#020500] via-gray-900 to-black text-white overflow-hidden p-6">
      
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#54F439]/20 rounded-full blur-[90px] animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-[#54F439]/20 rounded-full blur-[90px] animate-pulse"></div>

      <h1 className="text-9xl font-extrabold bg-gradient-to-r from-[#b7f7ac] to-[#27fa02] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(84,244,57,0.6)] animate-bounce">
        404
      </h1>

      <p className="mt-4 text-lg text-gray-300 text-center max-w-md">
        Oops! The page you’re looking for has vanished into the void.
      </p>

      <div className="mt-6 px-6 py-3 bg-white/5 border border-[#54F439]/30 rounded-full shadow-lg backdrop-blur-md animate-fade-in">
        <span className="text-[#54F439] font-semibold tracking-wide">
          Floos — Payroll Transaction
        </span>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-8 flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#54F439] to-[#00ffab] text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#54F439]"
      >
        <ArrowLeft size={18} />
        Go Back Home
      </button>

      <div className="mt-12 opacity-90 animate-float">
        <img
          src={Floos404}
          alt="Floos 404"
          className="w-96 mx-auto drop-shadow-[0_0_15px_rgba(0,255,171,0.4)]"
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;
