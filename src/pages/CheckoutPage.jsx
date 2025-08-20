import React, { useEffect, useState } from "react";
import { CheckOut } from "../components/Checkout";
import axios from "axios";
import { useParams } from "react-router-dom";

const CheckoutPage = () => {
  const { invoiceId } = useParams();
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"      // local backend
    : "/api"; 
  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

    axios
      .get(`${BASE_URL}/invoices/public/${invoiceId}`, {
        headers: { token },
      })
      .then((res) => {
        setOrder(res.data || null);
        setStatus(res.data?.status || null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data || "Error fetching invoice");
        setLoading(false);
      });
  }, [invoiceId, BASE_URL ]);

  return (
    <div className="rounded-[48px] sm:p-6 bg-white">
      <title>Checkout</title>

      <CheckOut
        order={order}
        status={status}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default CheckoutPage;
