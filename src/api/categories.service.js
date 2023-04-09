import { handleErrorss } from "../handleErros";
import api from "./api";

export async function getCategoriesList(token) {
  try {
    const response = await api.get("/auth/categoria", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    handleErrorss(error);
  }
}
