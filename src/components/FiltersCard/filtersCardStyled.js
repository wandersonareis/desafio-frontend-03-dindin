import styled from "@emotion/styled";
import { boxShadowColor, cardBgColor, categorieCardTittleColor } from "../colors";
import { Container } from "../styled";

export const CategoriesTittle = styled.span`
  font-size: 0.8rem;
  color: ${categorieCardTittleColor};
  margin-bottom: .5rem;
`;
export const CategoriesFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  max-height: 200px;
  gap: .3rem;
`;
export const FilterCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;

  background: ${cardBgColor};
  box-shadow: 0px 2px 11px ${boxShadowColor};
  border-radius: 10px;
  padding: .8rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  gap: .5rem;
`;
export const FilterCardActionsContainer = styled(Container)`
  justify-content: flex-start;
  gap: 1rem;
`;