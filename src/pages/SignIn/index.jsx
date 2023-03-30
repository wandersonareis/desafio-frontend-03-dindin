import styled from "@emotion/styled";
import Header from "../../components/Header";
import SignInForm from "../../components/form/signInForm";
import { Background } from "../../components/styled";

export default function SignIn() {
  return (
    <Background>
      
        <Header />
        <SignInForm />
    </Background>
  );
}

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100% - 4rem;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;
