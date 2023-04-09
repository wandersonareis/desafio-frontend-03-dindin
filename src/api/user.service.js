import api from "./api";
import { removeItem } from "../util/storage";

export async function getUserInfo(token) {
  const res = await api.get("/auth/usuario", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function sendUserUpdateInfo(token, name, email, password) {
  return await api.put(
    "/auth/usuario",
    { nome: name, email: email, senha: password },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}

export async function userLogin(email, password) {
  const res = await api.post("/login", { email, senha: password });
  return res.data;
}

export async function userSignUp(name, email, password) {
  const res = await api.post("/usuario", { nome: name, email, senha: password });
  return res.data;
}

export function userLogout() {
  removeItem();
}
