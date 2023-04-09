import styled from "@emotion/styled";
import { highlightColor, whitePureColor } from "../colors";

export const Logo = styled.img`
  position: absolute;
  top: 2%;
  left: 2%;

  @media (min-width: 967px) {
    top: 4rem;
    left: 7%;
  }
`;

export const LoginContainer = styled.div`
  --auto-grid-min-size: 20rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;
  align-items: center;
  justify-items: end;
  justify-content: center;
  margin-top: 4%;

  @media (min-width: 967px) {
    justify-content: end;
  }
`;

export const LoginFormContainer = styled.form`
  background-color: ${whitePureColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 24px;
  min-height: 350px;
  width: 400px;
  @media (min-width: 967px) {
    max-width: max-content;
    min-height: 420px;
  }
`;
export const LoginLeftContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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

  @media (min-width: 967px) {
    max-width: 33rem;
  }
`;
