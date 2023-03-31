import styled from "@emotion/styled";
import Header from "../../components/Header";
import SignInForm from "../../components/form/signInForm";
import { Background } from "../../components/styled";

export default function SignIn() {
  return (
    <Background>
    <LoginPageContainer>    
        <Header />
        <SignInForm />
        </LoginPageContainer>  
    </Background>
  );
}

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 1024px) {
    justify-content: space-around;
    align-items: space-between;
  }
`;
