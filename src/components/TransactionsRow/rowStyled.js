import styled from "@emotion/styled";
import { tableBorderColor, tableCreditsColor, tableDebitsColor } from "../colors";

export const TableRow = styled.tr`
  position: relative;
`;

export const TableCell = styled.td`
  text-align: center;
  border-bottom: 1px solid ${tableBorderColor};
  padding: 12px;
`;

export const ColumnDate = styled(TableCell)`
  font-weight: bold; ;
`;

export const ColumnValue = styled(TableCell)`
  font-weight: bold;
  color: ${({ tipo }) => (tipo === "entrada" ? tableCreditsColor : tableDebitsColor)};
`;

export const TableCellActions = styled(TableCell)`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const TableCellActionsIcons = styled.img`
  width: 100%;
  max-width: 1.5rem;
  max-height: 1.5rem;
  height: 100%;
  object-fit: cover;
  padding: .2rem;
`;
