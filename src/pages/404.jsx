import React from "react";
import { useNavigate } from "react-router-dom"; // or useRouter() in Next.js
import { ArrowLeft } from "lucide-react";
import Floos404 from "../components/assets/icons/floos-404.svg"

const ErrorPage = () => {
  const navigate = useNavigate(); // For Next.js, use: const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#020500] via-gray-900 to-black text-white p-6">
      
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00ffab]/20 rounded-full blur-3xl"></div>
      
      <h1 className="text-8xl font-extrabold bg-gradient-to-r from-[#00ffab] to-[#54F439] bg-clip-text text-transparent drop-shadow-lg animate-pulse">
        404
      </h1>

      <p className="mt-4 text-lg text-gray-300">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <div className="mt-6 px-6 py-3 bg-[#00ffab]/10 border border-[#54F439]/30 rounded-full shadow-lg backdrop-blur-md">
        <span className="text-[#54F439] font-semibold tracking-wide">
          Floos — Payroll Transaction
        </span>
      </div>

      <button
        onClick={() => navigate("/")} 
        className="mt-8 flex items-center gap-2 px-6 py-3 bg-[#54F439] hover:bg-[#52fd33] text-black rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft size={18} />
        Go Back Home
      </button>

      {/* Small Illustration */}
      <div className="mt-12 opacity-80">
      <img
  src={Floos404}
  alt="Floos 404 Illustration"
  className="w-96 mx-auto"
/>


      </div>
    </div>
  );
};

export default ErrorPage;
