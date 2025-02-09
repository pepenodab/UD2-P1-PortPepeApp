import axios from "axios";
import { asyncStorageService } from "./async-store-service";

const API_URL = "http://localhost:5000/images";

async function getAuthHeaders() {
  const token = await asyncStorageService.get<string>(
    asyncStorageService.KEYS.userToken
  );
  return { Authorization: `Bearer ${token}` };
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

async function deleteImage(id: number) {
  try {
    const headers = await getAuthHeaders();
    await axios.delete(`${API_URL}/${id}`, { headers });
  } catch (error) {
    console.error("Error eliminando imagen:", error);
  }
}

export const apiService = { getImages, saveImage, deleteImage };
