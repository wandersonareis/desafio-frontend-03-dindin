import api from "./api";
import { removeItem } from "../util/storage";

export async function getUserInfo(token) {
  return await api.get("/auth/usuario", {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export async function sendUserUpdateInfo(token, name, email, password) {
  return await api.put("/auth/usuario",
    { nome: name, email: email, senha: password },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
}

export function userLogin(email, password) {
  return api.post("/login", { email, senha: password }).then(res => res.data);
}

export function userSignUp(name, email, password) {
  return api.post("/usuario", { nome: name, email, senha: password }).then(res => res.data);
}

export function userLogout() {
  removeItem();
}