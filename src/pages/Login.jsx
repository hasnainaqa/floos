import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser,  isUserLoggedIn } from "../utils/auth";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true); // For loader
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isUserLoggedIn()) {
      navigate("/");
    } else {
      setLoading(false); 
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@floos" && password === "admin") {
      loginUser()
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[75vh] bg-gray-100">
        <p className="text-lg font-medium">{t("Checking session...")}</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-[75vh] bg-gray-100">
      <title>Floos Login</title>

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-md w-full max-w-sm rounded-2xl"
      >
        <h2
          className={`px-7 py-3 text-base rounded-full bg-[#020500] text-white flex justify-center mb-8 
            ${i18n.dir() === "ltr" ? "sm:w-1/2" : "w-full"}`}
        >
          {t("Floos Login")}
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded text-sm text-[#020500] outline-none placeholder:text-[#020500]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border rounded text-sm text-[#020500] outline-none placeholder:text-[#020500]"
        />
<div className="normalheight">

        <button
          type="submit"
          className="w-full transition bg-[#54F439] text-black px-6 py-3 rounded-full hover:bg-[#52ff34] mt-7"
          >
          {t("Login")}
        </button>
          </div>
      </form>
    </div>
  );
};

export default Login;
