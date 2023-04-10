import { SmallLoadingButton, WarningDeleteButton } from "../buttons";
import { successColor, warningColor } from "../colors";
import { ModalDeleteContainer, ModalDeleteContent } from "./modalStyled";
import { deleteUserTransaction } from "../../api";
import { useAuth, useTransaction } from "../../context";

export default function DeleteTransactionEntryModal({ transactionId, onClose }) {
  const { token, isLoading, setLoading } = useAuth();
  const { getTransactionData } = useTransaction();

  async function handleDeleteClick(e) {
    e.preventDefault();

    try {
      setLoading();
      await deleteUserTransaction(transactionId, token);

      await getTransactionData();
      onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading();
    }
  }
  return (
    <ModalDeleteContainer>
      <span>Apagar item?</span>
      <ModalDeleteContent>
        <SmallLoadingButton text="Sim" bgColor={successColor} isLoading={isLoading} onClick={handleDeleteClick} />
        <WarningDeleteButton bgColor={warningColor} onClick={onClose}>
          Não
        </WarningDeleteButton>
      </ModalDeleteContent>
    </ModalDeleteContainer>
  );
}
