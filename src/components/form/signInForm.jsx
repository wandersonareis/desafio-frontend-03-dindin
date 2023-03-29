import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getObjectItem } from "../../util/storage";
import InputStyled from "../basics/InputStyled";
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
  Paragraph,
  TittleParagraph
} from "./loginFormStyled";

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

      await onLogin(email.value, password.value)

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

  return (
    <LoginContainer>
      <LoginLeftContainer>
        <TittleParagraph>
          Controle suas <strong>finanças</strong>,<br />
          sem planilha chata.
        </TittleParagraph>
        <Paragraph>Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.</Paragraph>
        <PrimaryButton width="449px" onClick={signUpClick}>
          Cadastre-se
        </PrimaryButton>
      </LoginLeftContainer>
      <LoginFormContainer onSubmit={handleSubmit}>
        <ModalTitle textColor={primaryColor}>Login</ModalTitle>
        <InputStyled name="email" type="text" label="E-mail" placeholder="Digite o e-mail" onSelect={handleSelect} {...email} />
        <InputStyled name="passord" type="password" label="Senha" placeholder="Digite uma senha" onSelect={handleSelect} {...password} />
        <SpanWarning>{spanWarning}</SpanWarning>
        <LoadingButton type="submit" isLoading={isLoading} text="Entrar" />
      </LoginFormContainer>
    </LoginContainer>
  );
}

