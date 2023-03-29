import styled from "@emotion/styled";
import { boxShadowColor, primaryColor, successColor, whitePureColor, whiteSnowColor } from "../colors";
import LoadingSpinner from "../LoadingSpinner";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  font-size: 1em;
  font-weight: 500;
  color: ${whitePureColor};
  border: none;
  border-radius: 5px;
  padding: 0.6em 1.2em;
  background-color: ${primaryColor};
  transition: background-color 0.25s;
  outline: none;

  &:hover {
    filter: brightness(110%);
    border-color: #646cff;
  }

  &:active {
    background-color: #563d7c;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const Loading = styled(Button)`
  &:disabled {
    opacity: 0.5;
    cursor: progress;
  }
`;

export const PrimaryButton = styled(Button)`
  width: ${(props) => props.width || "100%"};
`;

export const AddRegisterButton = styled(Button)`
  align-self: flex-end;
  width: 236px;
`;

export const CreditsTransactionTypeButton = styled(Button)`
  border: none;
  background-color: ${(props) => (props.isSelected ? props.bgColor : "gray")};
  border-radius: "10px 0px 0px 10px";
`;

export const DebitsTransactionTypeButton = styled(Button)`
  border: none;
  background-color: ${(props) => (props.isSelected ? props.bgColor : "gray")};
  border-radius: "0px 10px 10px 0px";
`;

export const WarningDeleteButton = styled(Button)`
  width: 37px;
  height: 15px;
  background-color: ${(props) => props.bgColor || "gray"};
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 80px;
  height: 30px;
  box-shadow: 0px 2px 11px ${boxShadowColor};
  border-radius: 10px;
  border: none;
  color: ${(props) => (props.isSelected ? `${whitePureColor}` : "black")};
  background-color: ${(props) => (props.isSelected ? props.bgColor : `${whiteSnowColor}`)};
  gap: 0.8rem;
  margin-bottom: 0.8rem;

  ::after {
    content: "${(props) => props.afterContent}";
  }
`;
export const FiltersActionApplyButton = styled(FilterButton)`
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => props.textColor || `black`};
  background-color: ${(props) => props.bgColor || `${whiteSnowColor}`};
  gap: 0;
`;

export const LoadingButton = ({ type, isLoading, onClick, text }) => {
  return (
    <Loading type={type} onClick={onClick} disabled={isLoading}>
      {isLoading ? <LoadingSpinner /> : text}
    </Loading>
  );
};

export const SmallLoadingButton = ({ type, bgColor, isLoading, onClick, text }) => {
  return (
    <WarningDeleteButton type={type} bgColor={bgColor} onClick={onClick} disabled={isLoading}>
      {isLoading ? <LoadingSpinner small /> : text}
    </WarningDeleteButton>
  );
};
