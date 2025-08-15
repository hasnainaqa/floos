import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { loginUser, logoutUser } from "../utils/auth";

export default function PayrollAccountEntry() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser();
    const token = searchParams.get("token");

    if (token && token === "abcd1234") { 
      loginUser();
      navigate("/"); 
    } else {
      navigate("/login"); 
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Validating access...</p>
    </div>
  );
}
