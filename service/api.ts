import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.23:5000",
  headers: { "Content-Type": "application/json" },
});

export const registerUser = async (
  fullname: string,
  email: string,
  pswd: string
) => {
  const response = await api.post("/auth/register", { fullname, email, pswd });
  return response.data;
};

export const loginUser = async (email: string, pswd: string) => {
  const response = await api.post("/auth/login", { email, pswd });
  return response.data;
};
