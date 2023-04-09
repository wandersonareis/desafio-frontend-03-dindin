import styled from "@emotion/styled";
import { whitePureColor } from "../colors.js";

export const Header = styled.header`
  padding: 0 4%;
`;
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
`;
export const Hamburger = styled.div`
  display: block;
  cursor: pointer;

  @media (min-width: 968px) {
    display: none;
  }
`;
export const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    align-items: flex-end;
    position: fixed;
    right: -100%;
    top: 4rem;
    flex-direction: column;
    width: 100%;
    padding-right: 1.5rem;
    padding-bottom: 1rem;
    border-radius: 10px;
    text-align: all right ease-in-out;
    transition: 0.2s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    background: linear-gradient(90deg, rgb(5, 237, 227), rgb(100, 95, 251));

    &.active {
      right: 0;
      z-index: 2;
    }
  }
`;
export const NavItem = styled.li`
  list-style: none;
  margin-left: 1rem;
  @media (max-width: 768px) {
    margin-left: 5rem;
  }
`;
export const NavLink = styled.a`
  display: flex;
  gap: 0.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${whitePureColor};

  &:hover {
    color: black;
  }

  @media (min-width: 968px) {
    & > span {
      display: none;
    }
  }
`;
export const ProfileIcon = styled.img`
  display: none;

  @media (min-width: 967px) {
    display: block;
  }

  cursor: pointer;
`;
export const DindinHeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 35px;

  & > span {
    font-size: 36px;
    font-weight: 700;
  }
`;