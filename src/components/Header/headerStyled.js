import styled from "@emotion/styled";
import { whitePureColor } from "../colors";

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4% 7%;
  width: 100%;
  height: 42px;
  color: ${whitePureColor};
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
  cursor: pointer;
`;