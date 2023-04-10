import React, { useState, createContext } from "react";
import { getUserTransactionsFiltered, getUserTransactionsList, getUserTransactionsSummary } from "../api";
import { handleErrorss } from "../handleErros";
import { getObjectItem } from "../util/storage";

const TransactionContext = createContext({});

export const TransactionProvider = ({ children }) => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [transactionsSummary, setTransactionsSummary] = useState({});
  const { token } = getObjectItem();

  async function getTransactionData(filters = []) {
    try {
      const transactionListResponse = filters.length ? await getUserTransactionsFiltered(filters, token) : await getUserTransactionsList(token);
      const { entrada: credits, saida: debits } = await getUserTransactionsSummary(token);
      setTransactionsList(transactionListResponse);
      setTransactionsSummary({ credits, debits });
    } catch (error) {
      handleErrorss(error);
    }
  }

  const value = {
    transactionsList,
    setTransactionsList,
    transactionsSummary,
    setTransactionsSummary,
    getTransactionData,
  };

  return <TransactionContext.Provider value={value}>{children}</TransactionContext.Provider>;
};

export default TransactionContext;
