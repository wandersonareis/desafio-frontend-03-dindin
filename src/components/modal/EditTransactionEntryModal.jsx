import React from "react";
import { ModalBackDropTransactions } from "./modalStyled";
import { sendUserTransactionUpdate } from "../../api";
import { TransactionForm } from "../form";
import { toIsodateString } from "../../util/localDateFormater";
import { formatToCents } from "../../util/localCurrencyConverter";
import { useAuth, useTransaction } from "../../context";

export default function EditTransactionEntryModal({ onClose, transactionToUpdate, setTransactionToUpdate }) {
  const { token, isLoading, setLoading } = useAuth();
  const { getTransactionData } = useTransaction();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading();

      const transactionData = {
        tipo: `${transactionToUpdate.type ? "entrada" : "saida"}`,
        descricao: transactionToUpdate.description,
        valor: formatToCents(transactionToUpdate.value),
        data: toIsodateString(transactionToUpdate.date),
        categoria_id: transactionToUpdate.category_id,
      };

      await sendUserTransactionUpdate(transactionToUpdate.id, transactionData, token);

      await getTransactionData();
      onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading();
    }
  }


  return (
    <ModalBackDropTransactions>
      {transactionToUpdate && (
        <TransactionForm
          tittle="Editar registro"
          onClose={onClose}
          transactionObject={transactionToUpdate}
          setTransactionObject={setTransactionToUpdate}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
        />
      )}
    </ModalBackDropTransactions>
  );
}
