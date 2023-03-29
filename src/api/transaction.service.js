import api from "./api";

export async function getUserTransaction(transaction_id, token) {
  const response = await api.get(`/auth/transacao/${transaction_id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
}

export function getUserTransactionsList(token) {
  return api.get("/auth/transacao", {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.data);
}

export function getUserTransactionsFiltered(filters, token) {
  const parameters = filters.map(filter => `filtro[]=${filter}`).join("&");
  return api.get(`/auth/transacao?${parameters}`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.data);
}

export async function getUserTransactionsSummary(token) {
  const response = await api.get("/auth/transacao/extrato", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function createUserTransaction(data, token) {
  const response = await api.post("/auth/transacao", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
}

export async function sendUserTransactionUpdate(transaction_id, data, token) {
  const response = await api.put(`/auth/transacao/${transaction_id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
}

export async function deleteUserTransaction(transaction_id, token) {
  const result = await confirmTransaction(transaction_id, token)
  if (result) {
    await api.delete(`/auth/transacao/${transaction_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  async function confirmTransaction(transaction_id, token) {
    const response = await getUserTransaction(transaction_id, token)
    return !!response;
  }
}
