import styled from "@emotion/styled";
import Header from "../../components/Header";
import SignInForm from "../../components/form/signInForm";
import { Background } from "../../components/styled";

export default function SignIn() {
  return (
    <Background>
      <LoginContainer>
        <Header />
        <SignInForm />
      </LoginContainer>
    </Background>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
