import React, { useState } from "react";
import styled from "@emotion/styled";
import InputStyled from "../basics/Input/InputStyled";
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
import logo from "../../assets/logo.svg";
import { Logo } from "./loginFormStyled";
import { createInputs } from "../basics/Input/createInputs";

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

  const inputModels = [
    {
      inputType: "input",
      name: "name",
      label: "Nome",
      placeholder: "Digite seu nome",
      type: "text",
      onSelect: handleSelect,
      ...name,
    },
    {
      inputType: "input",
      name: "email",
      label: "E-mail",
      placeholder: "Digite seu e-mail",
      type: "email",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
      title: "Insira um endereço de email válido.",
      onSelect: handleSelect,
      ...email,
    },
    {
      inputType: "input",
      name: "password",
      label: "Senha",
      placeholder: "Digite sua senha",
      type: "password",
      onSelect: handleSelect,
      required: true,
      ...password,
    },
    {
      inputType: "input",
      name: "confirmPassword",
      label: "Senha",
      placeholder: "Confirme sua senha",
      type: "password",
      onSelect: handleSelect,
      required: true,
      ...confirmPassword,
    },
  ];

  const inputs = createInputs(inputModels);

  return (
    <SignUpContainer>
      <Logo src={logo} />
      <SignUpContent onSubmit={handleSubmit}>
        <ModalTitle textColor={primaryColor}>Cadastre-se</ModalTitle>
        {inputs}
        {warning.name && <SpanWarning>{warning.name}</SpanWarning>}
        {warning.email && <SpanWarning>{warning.email}</SpanWarning>}
        <SpanWarning>{warning.password}</SpanWarning>
        {warning.confirmPassword && <SpanWarning>{warning.confirmPassword}</SpanWarning>}
        <SpanWarning>{spanWarning}</SpanWarning>

        <LoadingButton type="submit" isLoading={isLoading} text="Cadastrar">
          Cadastrar
        </LoadingButton>
        <SignUpLink href="/">Já tem cadastro? Clique aqui!</SignUpLink>
      </SignUpContent>
    </SignUpContainer>
  );
}

const SignUpContainer = styled(Container)`
  flex-direction: column;
`;

const SignUpContent = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1.5rem;
  width: 25rem;
`;

const SignUpLink = styled.a`
  margin-top: .6rem;
`