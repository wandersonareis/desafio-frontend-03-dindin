import React, { useState } from "react";
import { LoadingButton } from "../buttons";
import { schemaPasswordConfirmValidation } from "../../util/schemas";
import { SpanWarning } from "../styled";
import { getObjectItem, setObjectItem } from "../../util/storage";
import { ModalBackdrop, ModalCloseButton, ModalContainer, ModalContentForm, ModalTitle } from "./modalStyled";
import { handleErrors } from "../../handleErros";
import { getUserInfo, sendUserUpdateInfo } from "../../api";
import { useAuth } from "../../context";
import { useFormInput } from "../../lib/customHooks";
import { UserForm } from "../form";

export default function UserPerfilEditModal({ onClose }) {
  const storedData = getObjectItem();
  const { token, user, setUserData, isLoading, setLoading } = useAuth();
  const { resetValue: resetName, ...name } = useFormInput(user.name);
  const { resetValue: resetEmail, ...email } = useFormInput(user.email);
  const { resetValue: resetPassword, ...password } = useFormInput("");
  const { resetValue: resetConfirmPassword, ...confirmPassword } = useFormInput("");
  const [warning, setWarning] = useState({});
  const [spanWarning, setSpanWarning] = useState("");

  function handleSelect() {
    setWarning({});
    setSpanWarning("");
  }

  function resetAllFields() {
    resetName();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading();

      const userData = {
        name: name.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      };

      await schemaPasswordConfirmValidation.validate(userData, { abortEarly: false });

      token && (await sendUserUpdateInfo(token, userData.name, userData.email, userData.password));

      setObjectItem({ ...storedData, nome: userData.name, email: userData.email });

      const newUserData = await getUserInfo(token);
      setUserData({ name: newUserData.nome, email: newUserData.email });

      resetAllFields();
      onClose();
    } catch (err) {
      console.log(err);
      handleErrors(err, setSpanWarning, setWarning);
    } finally {
      setLoading();
    }
  }

  return (
    <ModalBackdrop>
      <ModalContentForm onSubmit={handleSubmit}>
        <ModalContainer>
          <ModalTitle>Editar Perfil</ModalTitle>
          <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        </ModalContainer>
        <UserForm handleSelect={handleSelect} name={name} email={email} password={password} confirmPassword={confirmPassword} />
        {warning.name && <SpanWarning>{warning.name}</SpanWarning>}
        {warning.email && <SpanWarning>{warning.email}</SpanWarning>}
        {warning.password && <SpanWarning>{warning.password}</SpanWarning>}
        {warning.confirmPassword && <SpanWarning>{warning.confirmPassword}</SpanWarning>}
        <SpanWarning>{spanWarning}</SpanWarning>
        <LoadingButton type="submit" text="Confirmar" isLoading={isLoading} />
      </ModalContentForm>
    </ModalBackdrop>
  );
}
