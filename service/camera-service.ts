import axios from "axios";
import { asyncStorageService } from "./async-store-service";

const API_URL = "http://192.168.0.23:5000/images";

async function getAuthHeaders() {
  try {
    const token = await asyncStorageService.get(
      asyncStorageService.KEYS.userToken
    );

    if (!token) {
      console.warn("No se encontró un token válido en AsyncStorage.");
      return {};
    }

    return { Authorization: `Bearer ${token}` };
  } catch (error) {
    console.error("❌ Error obteniendo el token:", error);
    return {};
  }
}

async function getImages() {
  try {
    const headers = await getAuthHeaders();
    const response = await axios.get(`${API_URL}/get-all`, { headers });
    return response.data;
  } catch (error) {
    console.error("Error obteniendo imágenes:", error);
    return [];
  }
}

async function saveImage(base64: string, width: number, height: number) {
  try {
    const headers = await getAuthHeaders();
    const response = await axios.post(
      `${API_URL}/save`,
      { encodedData: base64, width, height },
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error guardando imagen:", error);
  }
}

export const apiService = { getImages, saveImage };
