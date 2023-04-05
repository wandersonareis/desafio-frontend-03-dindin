import { useState } from "react";
import { ModalBackdrop } from "./modalStyled";
import { createUserTransaction } from "../../api";
import { TransactionForm } from "../form";
import { toIsodateString } from "../../util/localDateFormater";
import { formatMoney, formatToCents } from "../../util/localCurrencyConverter";
import { useAuth } from "../../context";

const transactionBase = {
  type: false,
  value: formatMoney(""),
  category_id: 1,
  date: "2023-03-01",
  description: "",
};

export default function AddTransactionEntryModal({ isOpen, onClose }) {
  const [transaction, setTransaction] = useState(transactionBase);
  const { token, setLoading, getTransactionData } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading();

      const transactionData = {
        tipo: `${transaction.type ? "entrada" : "saida"}`,
        descricao: transaction.description,
        valor: formatToCents(transaction.value),
        data: toIsodateString(transaction.date),
        categoria_id: transaction.category_id,
      };

      await createUserTransaction(transactionData, token);

      setTransaction(transactionBase);
      await getTransactionData();
      onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading();
    }
  }

  if (!isOpen) {
    return null;
  }
  return (
    <ModalBackdrop>
      <TransactionForm
        tittle="Adicionar Registro"
        onClose={onClose}
        transactionObject={transaction}
        handleSubmit={handleSubmit}
        setTransactionObject={setTransaction}
      />
    </ModalBackdrop>
  );
}
