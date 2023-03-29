import styled from "@emotion/styled";
import { whitePureColor } from "../../components/colors";

export const MainContainer = styled.div`
  background: linear-gradient(90deg, rgb(5, 237, 227), rgb(100, 95, 251));
`;
export const MainContent = styled.main`
  width: 100%;
  height: 100%;
  border-radius: 60px 60px 0px 0px;

  padding: 6%;
  background-color: ${whitePureColor};
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 1.5rem;
`;
export const MainCard = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;