import { useEffect, useState, useRef } from "react";
import { ModalCloseButton, ModalContainer, ModalContentForm, ModalTitle } from "../modal/modalStyled";
import { successColor, warningColor } from "../colors";
import { CreditsTransactionTypeButton, DebitsTransactionTypeButton, LoadingButton } from "../buttons";
import { formatMoney } from "../../util/localCurrencyConverter";
import { onlyDate } from "../../util/localDateFormater";
import { useOnClickOutside } from "../../lib/customHooks";
import { useAuth } from "../../context";
import { useLoaderData } from "react-router-dom";
import { createInputs } from "../basics/Input/createInputs";

export default function TransactionForm({ tittle, onClose, transactionObject, setTransactionObject, handleSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const { isLoading } = useAuth();
  const transactionFormRef = useRef();
  const categoriesList = useLoaderData()

  useOnClickOutside(transactionFormRef, () => onClose());

  useEffect(() => {
    setSelectedCategory(transactionObject.category_id);
  }, []);

  function handleChangeTransactionType(e) {
    e.preventDefault();

    const buttonId = e.target.id;
    if (buttonId === "credit") {
      setTransactionObject({ ...transactionObject, type: true });
    }

    if (buttonId === "debit") {
      setTransactionObject({ ...transactionObject, type: false });
    }
  }

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setTransactionObject({ ...transactionObject, [name]: value });
  }

  function handleChangeNumberInput(e) {
    const formattedValue = formatMoney(e.target.value);

    e.target.value = `${formattedValue}`;
    const { name, value } = e.target;

    setTransactionObject({ ...transactionObject, [name]: value });
  }

  function handleOptionChange(e) {
    const { name, value } = e.target;
    setSelectedCategory(value);
    setTransactionObject({ ...transactionObject, [name]: value });
  }

  const inputModels = [
    {
      inputType: "number",
      name: "value",
      label: "Valor",
      type: "text",
      value: transactionObject.value,
      onChange: handleChangeNumberInput,
    },
    {
      inputType: "select",
      name: "category_id",
      label: "Categoria",
      options: categoriesList,
      value: selectedCategory,
      onChange: handleOptionChange
    },
    {
      inputType: "input",
      name: "date",
      label: "Data",
      type: "date",
      value: onlyDate(transactionObject.date),
      onChange: handleChangeInput
    },
    {
      inputType: "input",
      name: "description",
      label: "Descrição",
      type: "text",
      value: transactionObject.description,
      onChange: handleChangeInput
    },
  ];

  const inputs = createInputs(inputModels);

  return (
    <ModalContentForm onSubmit={handleSubmit} ref={transactionFormRef}>
      <ModalContainer>
        <ModalTitle>{tittle}</ModalTitle>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
      </ModalContainer>
      <ModalContainer>
        <CreditsTransactionTypeButton id="credit" bgColor={successColor} isSelected={transactionObject.type} onClick={handleChangeTransactionType}>
          Entrada
        </CreditsTransactionTypeButton>
        <DebitsTransactionTypeButton id="debit" bgColor={warningColor} isSelected={!transactionObject.type} onClick={handleChangeTransactionType}>
          Saída
        </DebitsTransactionTypeButton>
      </ModalContainer>
      {inputs}
      <LoadingButton type="submit" isLoading={isLoading} text="Confirma" />
    </ModalContentForm>
  );
}
