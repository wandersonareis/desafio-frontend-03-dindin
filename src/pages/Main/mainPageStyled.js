import styled from "@emotion/styled";
import { whitePureColor } from "../../components/colors";

export const MainContainer = styled.div`
  background: linear-gradient(90deg, rgb(5, 237, 227), rgb(100, 95, 251));
`;
export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: min(100vw, 1440px);
  height: min(100vh, 1024px);
  border-radius: 60px 60px 0px 0px;
  padding: 4% 6%;
  background-color: ${whitePureColor};
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 767px) {
    overflow-x: auto;
  }
`;

export const MainCard = styled.div`
  border-radius: 10px;
  --auto-grid-min-size: 20rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: 967px) {
    grid-template-columns: auto minmax(var(--auto-grid-min-size), 1fr);
  }
`;
