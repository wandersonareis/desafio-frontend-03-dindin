import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getObjectItem } from "../../util/storage";
import { ModalTitle } from "../modal/modalStyled";
import { LoadingButton, PrimaryButton } from "../buttons";
import { primaryColor } from "../colors";
import { SpanWarning } from "../styled";
import { useAuth } from "../../context";
import { useFormInput } from "../../lib/customHooks";
import {
  LoginContainer,
  LoginFormContainer,
  LoginLeftContainer,
  Logo,
  Paragraph,
  TittleParagraph
} from "./loginFormStyled";
import { createInputs } from "../basics/Input/createInputs";
import logo from "../../assets/logo.svg";

export default function SignInForm() {
  const { resetValue: resetEmail, ...email } = useFormInput("");
  const { resetValue: resetPassword, ...password } = useFormInput("");
  const [spanWarning, setSpanWarning] = useState("");
  const { onLogin, isLoading, setLoading } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const { token } = getObjectItem();
    if (token) {
      navigate("/main");
    }
  }, []);

  function handleSelect() {
    if (spanWarning) setSpanWarning("");
  }

  function signUpClick(e) {
    e.preventDefault();
    navigate("/signup");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading();
      if (!email.value || !password.value) {
        setSpanWarning("Preencha todos os campos!");
        return;
      }

      await onLogin(email.value, password.value);

      resetEmail();
      resetPassword();
    } catch (error) {
      if (error.response?.data?.mensagem) {
        setSpanWarning(error.response.data.mensagem);
      } else {
        console.log(error);
      }
    } finally {
      setLoading();
    }
  }

  const inputModels = [
    {
      inputType: "input",
      name: "email",
      label: "E-mail",
      placeholder: "Digite seu email",
      type: "email",
      onSelect: handleSelect,
      ...email
    },
    {
      inputType: "input",
      name: "password",
      label: "Senha",
      placeholder: "Digite sua senha",
      type: "password",
      onSelect: handleSelect,
      required: true,
      ...password
    }
  ];

  const inputs = createInputs(inputModels);

  return (
    <LoginContainer>
      <Logo src={logo} />
      <LoginLeftContainer>
        <TittleParagraph>
          Controle suas <strong>finanças</strong>,<br />
          sem planilha chata.
        </TittleParagraph>
        <Paragraph>Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um
          clique de distância.</Paragraph>
        <PrimaryButton width="449px" onClick={signUpClick}>
          Cadastre-se
        </PrimaryButton>
      </LoginLeftContainer>
      <LoginFormContainer onSubmit={handleSubmit}>
        <ModalTitle textColor={primaryColor}>Login</ModalTitle>
        {inputs}
        <SpanWarning>{spanWarning}</SpanWarning>
        <LoadingButton type="submit" isLoading={isLoading} text="Entrar" />
      </LoginFormContainer>
    </LoginContainer>
  );
}
