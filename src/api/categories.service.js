import api from "./api";

export async function getCategoriesList(token) {
  const response = await api.get("/auth/categoria", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
}
