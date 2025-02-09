import axios from "axios";
import { asyncStorageService } from "./async-store-service";

const api = axios.create({
  baseURL: "http://192.168.0.23:5000",
  headers: { "Content-Type": "application/json" },
});

async function testTokenStorage() {
  const storedData = await asyncStorageService.get<{ token: string }>(
    asyncStorageService.KEYS.userToken
  );
  console.log("Token guardado en AsyncStorage:", storedData);
}

export const registerUser = async (
  fullname: string,
  email: string,
  pswd: string
) => {
  const response = await api.post("/auth/register", { fullname, email, pswd });
  return response.data;
};

export const loginUser = async (email: string, pswd: string) => {
  try {
    const response = await api.post("/auth/login", { email, pswd });

    console.log("Respuesta completa del login:", response.data);

    const token = response.data.object?.token;

    if (token) {
      console.log("Token recibido:", token);
      await asyncStorageService.save(asyncStorageService.KEYS.userToken, token);
    } else {
      console.error("No se recibió un token válido en la respuesta.");
    }

    testTokenStorage();
    return response.data;
  } catch (error) {
    console.error("Error en login:", error);
    throw error;
  }
};
