import React, { useState } from "react";
import styled from "@emotion/styled";
import InputStyled from "../basics/InputStyled";
import { Link, useNavigate } from "react-router-dom";
import { LoadingButton } from "../buttons";
import { primaryColor } from "../colors";
import { schemaPasswordConfirmValidation } from "../../util/schemas";
import { Container, SpanWarning } from "../styled";
import { handleErrors } from "../../handleErros";
import { ModalContentForm, ModalTitle } from "../modal/modalStyled";
import { userSignUp } from "../../api";
import { useFormInput } from "../../lib/customHooks";
import { useAuth } from "../../context";

export default function SignUpForm() {
  const { isLoading, setLoading } = useAuth();
  const { resetValue: resetName, ...name } = useFormInput("");
  const { resetValue: resetEmail, ...email } = useFormInput("");
  const { resetValue: resetPassword, ...password } = useFormInput("");
  const { resetValue: resetConfirmPassword, ...confirmPassword } = useFormInput("");
  const [warning, setWarning] = useState("");
  const [spanWarning, setSpanWarning] = useState("");

  const navigate = useNavigate();

  function handleSelect(e) {
    e.preventDefault();
    if (warning) setWarning({});
  }

  function resetAllFileds() {
    resetName();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading();

      const signUpData = {
        name: name.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      };

      await schemaPasswordConfirmValidation.validate(signUpData, { abortEarly: false });

      await userSignUp(name.value, email.value, password.value);

      navigate("/");
      resetAllFileds();
    } catch (err) {
      handleErrors(err, setSpanWarning, setWarning);
    } finally {
      setLoading();
    }
  }

  return (
    <SignUpContainer>
      <SignUpContent onSubmit={handleSubmit}>
        <ModalTitle textColor={primaryColor}>Cadastre-se</ModalTitle>
        <InputStyled name="name" label="Nome" type="text" placeholder="Nome" onSelect={handleSelect} {...name} />
        {warning.name && <SpanWarning>{warning.name}</SpanWarning>}

        <InputStyled name="email" label="E-mail" type="text" placeholder="E-mail" onSelect={handleSelect} {...email} />
        {warning.email && <SpanWarning>{warning.email}</SpanWarning>}

        <InputStyled name="password" label="Senha" type="password" placeholder="Senha" onSelect={handleSelect} {...password} />
        <SpanWarning>{warning.password}</SpanWarning>

        <InputStyled name="confirmPassword" label="Confirmação de senha" type="password" placeholder="Confirme a senha" onSelect={handleSelect} {...confirmPassword} />
        {warning.confirmPassword && <SpanWarning>{warning.confirmPassword}</SpanWarning>}
        <SpanWarning>{spanWarning}</SpanWarning>

        <LoadingButton type="submit" isLoading={isLoading} text="Cadastrar">
          Cadastrar
        </LoadingButton>
        <Link to="/">Já tem cadastro? Clique aqui!</Link>
      </SignUpContent>
    </SignUpContainer>
  );
}

const SignUpContainer = styled(Container)`
  flex-direction: column;
`;

const SignUpContent = styled(ModalContentForm)`
  justify-content: space-around;
  align-items: center;
  max-height: 770px;
`;
