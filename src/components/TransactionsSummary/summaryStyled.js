import styled from "@emotion/styled";
import { boxShadowColor, cardBgColor, orangeColor, primaryColor, successColor } from "../colors";
import { MainContainer } from "../styled";

export const SummaryContainer = styled(MainContainer.withComponent("aside"))`
width: 236px;
margin: 1.5rem 0;
gap: 1rem;
`;
export const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 236px;
  height: 196px;

  padding: 10%;

  background: ${cardBgColor};
  box-shadow: 0px 2px 11px ${boxShadowColor};
  border-radius: 10px;
`;
export const SummaryContent = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    font-weight: 500;
  }
`;
export const SummarySpanDeposits = styled.span`
  color: ${primaryColor};
`;
export const SummarySpanWithDraws = styled.span`
  color: ${orangeColor};
`;
export const SummarySpanBalance = styled.span`
  color: ${successColor};
`;
export const SummarySeparator = styled.hr`
  width: 100%;
`;