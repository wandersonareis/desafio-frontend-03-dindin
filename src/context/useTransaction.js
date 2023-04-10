import { useContext } from "react";
import TransactionContext from "./transactionProvider";

export default function useTransaction() {
  return useContext(TransactionContext);
}