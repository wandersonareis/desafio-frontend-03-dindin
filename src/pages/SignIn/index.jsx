import styled from "@emotion/styled";
import bgImage from "../../assets/bg_main.png";
import SignInForm from "../../components/form/signInForm";

export default function SignIn() {
  return (
    <LoginPageContainer>
      <SignInForm />
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3% 2%;
  position: relative;

  @media (min-width: 1024px) {
    justify-content: space-around;
    padding: 0 7%;
  }
`;
