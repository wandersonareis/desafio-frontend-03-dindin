import React, { useEffect, useState } from "react";
import pencilIcon from "../../assets/pencil.svg";
import trashIcon from "../../assets/trash.svg";
import { useToggle } from "../../lib/customHooks";
import { formatMoney, toBrl } from "../../util/localCurrencyConverter";
import { onlyDate, toPtBrDateFormatter, toPtBrWeekDay } from "../../util/localDateFormater";
import { DeleteTransactionEntryModal, EditTransactionEntryModal } from "../modal";
import { ColumnDate, ColumnValue, TableCell, TableCellActions, TableCellActionsIcons, TableRow } from "./rowStyled";

function TransactionRow({ isOpen, onOpen, transaction }) {
  const [transactionToUpdate, setTransactionToUpdate] = useState({});
  const [isTransactionEditModalOpen, setTransactionEditModalOpen] = useToggle();

  useEffect(() => {
    setTransactionToUpdate({
      id: transaction.id,
      type: transaction.tipo === "entrada",
      value: formatMoney(transaction.valor.toString()),
      date: onlyDate(transaction.data),
      category_id: transaction.categoria_id,
      description: transaction.descricao,
    });
  }, []);

  return (
    <TableRow>
      <ColumnDate className="date">{toPtBrDateFormatter(transaction.data)}</ColumnDate>
      <TableCell>{toPtBrWeekDay(transaction.data)}</TableCell>
      <TableCell>{transaction.descricao}</TableCell>
      <TableCell>{transaction.categoria_nome}</TableCell>
      <ColumnValue tipo={transaction.tipo}>{toBrl(transaction.valor)}</ColumnValue>
      <TableCellActions>
        <TableCellActionsIcons src={pencilIcon} alt="Editar transação." onClick={setTransactionEditModalOpen} />
        <TableCellActionsIcons src={trashIcon} alt="Excluir transação."
         onClick={() => onOpen(transaction.id)} />
      </TableCellActions>
      {isTransactionEditModalOpen && (
        <EditTransactionEntryModal
          isOpen={isTransactionEditModalOpen}
          onClose={setTransactionEditModalOpen}
          transactionToUpdate={transactionToUpdate}
          setTransactionToUpdate={setTransactionToUpdate}
        />
      )}
      {isOpen === transaction.id && (
        <DeleteTransactionEntryModal transactionId={transaction.id} onClose={() => onOpen(null)} />
      )}
    </TableRow>
  );
}

export default TransactionRow;
