import styled from "@emotion/styled";
import bgImage from "../assets/bg_main.png";
import { highlightColor } from "./colors";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: min(100vw, 1440px);
  height: min(100vh - 2.5rem, 1024px - 2.5rem);
  padding: 3% 2%;
  background: linear-gradient(to right, rgba(5, 237, 227, 0.5) 0%, rgba(100, 95, 251, 0.5) 100%, rgba(100, 95, 251, 0.5) 100%), url(${bgImage});
  background-size: cover;

  @media (min-width: 1024px) {
    padding: 0 7%;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SpanHighlight = styled.span`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 33px;
  margin-bottom: 1rem;
  color: ${highlightColor};
`;

export const SpanWarning = styled.span`
  font-size: 0.8;
  color: red;
`;
