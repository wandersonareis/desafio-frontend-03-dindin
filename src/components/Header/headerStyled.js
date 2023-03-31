import styled from "@emotion/styled";
import { whitePureColor } from "../colors";

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3%;
  padding: 4%;
  width: 100%;
  max-width: 1440px;
  height: 2.5rem;
  color: ${whitePureColor};
  //position: fixed;
  top: 0;
`;

export const DindinHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 35px;

  & > span {
    font-size: 36px;
    font-weight: 700;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.6rem;
  height: 42px;

  & > a {
    display: flex;
  }
`;
export const ProfileIcon = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  cursor: pointer;
`;
