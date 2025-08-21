import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, isUserLoggedIn } from "../utils/auth";
import { login } from "../api/auth";
import PhoneInputComponent from "../components/ui/PhoneInputComponent";
import { encryptRSA } from "../utils/encryption";

const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isUserLoggedIn()) {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    // setLoading(true);
    setError("");

    try {
      const res = await login(phone, password);
      const token = res.data?.access_token;
      if (token) {
        loginUser(token);
        navigate("/");
      } else {
        setError("Invalid response from server");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-[75vh] bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-md w-full max-w-sm rounded-2xl">
        <h2 className="px-7 py-3 text-base rounded-full bg-[#020500] text-white flex justify-center mb-8">
          Floos Login
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <PhoneInputComponent onChange={(val) => setPhone(val)} />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 py-4 my-4 rounded-3xl text-sm text-[#020500] bg-[#F1F4F1] outline-none placeholder:text-[#020500]"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full transition bg-[#54F439] text-black px-6 py-3 rounded-full hover:bg-[#52ff34] mt-7 disabled:opacity-50">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
