import styled from "@emotion/styled";
import { highlightColor, whitePureColor } from "../colors";
import { ModalContentForm } from "../modal/modalStyled";

export const LoginContainer = styled.main`
  --auto-grid-min-size: 20rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 4%;

  @media (min-width: 1024px) {
    justify-content: end;
  }
`;
export const LoginFormContainer = styled(ModalContentForm)`
  justify-content: space-between;
  gap: .5rem;
  max-height: 30rem;
  padding: 2.5%;
  @media (min-width: 1024px) {
    max-width: max-content;
  }
`;
export const LoginLeftContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const TittleParagraph = styled.h1`
  font-size: calc(2.3rem + 0.5vw);
  color: ${whitePureColor};

  & > strong {
    color: ${highlightColor};
  }
`;
export const Paragraph = styled.p`
  display: flex;
  font-size: calc(1.2rem + 0.5vw);
  text-overflow: ellipsis;
  text-align: left;
  color: ${whitePureColor};

  & > strong {
    margin-left: 1%;
    color: ${highlightColor};
  }

  @media (min-width: 1024px) {
    max-width: 33rem;
  }
`;