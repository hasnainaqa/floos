import axios from "axios";
import { encryptRSA } from "../utils/encryption";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function login(phone, password, type = "merchant") {
  const passcode = await encryptRSA(password);
  const payload = {
    phone: phone,
    passcode: passcode,
    type: type,
  };

  return axios.post(`${BASE_URL}/api/auth/login`, payload, {
    headers: {
      "Content-Type": "application/json",
      "accept-language": "en", 
    },
  });
}
