import { useState } from "react";
import { getUserTransactionsFiltered, getUserTransactionsList, getUserTransactionsSummary } from "../api";

export function transactionsContext(token) {
  const [transactionsList, setTransactionsList] = useState([]);
  const [transactionsSummary, setTransactionsSummary] = useState({});

  async function getTransactionData(filters = []) {
    try {
      const transactionListResponse = filters.length ? await getUserTransactionsFiltered(filters, token) : await getUserTransactionsList(token);
      const { entrada: credits, saida: debits } = await getUserTransactionsSummary(token);
      setTransactionsList(transactionListResponse);
      setTransactionsSummary({ credits, debits });
    } catch (error) {
      console.log(error);
    }
  }

  return {
    transactionsList,
    setTransactionsList,
    transactionsSummary,
    setTransactionsSummary,
    getTransactionData,
  };
}
