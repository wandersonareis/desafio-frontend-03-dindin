import styled from "@emotion/styled";
import bgImage from "../assets/bg_main.png";
import { highlightColor } from "./colors";

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

export const SpanWarning = styled.span`
  font-size: .8rem;
  color: red;
`;
