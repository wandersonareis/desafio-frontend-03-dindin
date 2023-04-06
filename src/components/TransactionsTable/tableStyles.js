import styled from "@emotion/styled";
import { boxShadowColor, tableBgColor } from "../colors";
import { Container } from "../styled";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  margin: 1.5rem 0;
  background-color: ${tableBgColor};

  @media screen and (min-width: 768px) {
    width: 964px;
    margin: 1.5rem auto;
  }
`;
export const TableHeader = styled.thead`
  border-radius: 10px;
  box-shadow: 0px 2px 11px ${boxShadowColor};
`;
export const Th = styled.th`
  position: relative;
  text-align: center;
  user-select: none;

  width: ${({ width }) => width || "auto"};
  color: black;
  padding: 12px;
  
  cursor: pointer;
`;
export const Tr = styled.tr`
  height: 100%;
`;
export const SortIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  vertical-align: middle;
  transition: transform 0.2s ease-in-out;

  &.asc {
    transform: rotate(0deg);
  }

  &.desc {
    transform: rotate(180deg);
  }
`;

export const PaginadeTableContainer = styled(Container)`
  justify-content: center;
  gap: .8rem;
`;
