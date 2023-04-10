import { FilterButton, FiltersActionApplyButton } from "../buttons";
import { primaryColor, whiteSnowColor } from "../colors";
import { CategoriesFilters, CategoriesTittle, FilterCard, FilterCardActionsContainer } from "./filtersCardStyled";
import { useTransaction } from "../../context";
import { useLoaderData } from "react-router-dom";

export default function FiltersCard({ selectedFilter, filtersList, setFiltersList, setFilters }) {
  const { getTransactionData } = useTransaction();

  const categoriesList = useLoaderData();

  function handleFilterClick(categoryName) {
    if (filtersList.includes(categoryName)) {
      setFiltersList(filtersList.filter((f) => f !== categoryName));
    } else {
      setFiltersList([...filtersList, categoryName]);
    }
  }
  function applyFiltersList() {
    getTransactionData(filtersList);
    setFilters(filtersList);
  }

  function cleanFiltersList() {
    getTransactionData();
    setFiltersList([]);
    setFilters([]);
  }

  return (
    <FilterCard>
      <CategoriesTittle>Categoria</CategoriesTittle>
      <CategoriesFilters>
        {categoriesList &&
          categoriesList.map((category) => (
            <FilterButton
              key={category.id}
              bgColor={primaryColor}
              afterContent={selectedFilter(category.descricao) ? "x" : "+"}
              isSelected={selectedFilter(category.descricao)}
              onClick={() => handleFilterClick(category.descricao)}
            >
              <span>{category.descricao}</span>
            </FilterButton>
          ))}
      </CategoriesFilters>
      <FilterCardActionsContainer>
        <FiltersActionApplyButton onClick={cleanFiltersList}>Limpar Filtros</FiltersActionApplyButton>
        <FiltersActionApplyButton textColor={whiteSnowColor} bgColor={primaryColor} onClick={applyFiltersList}>
          Aplicar Filtros
        </FiltersActionApplyButton>
      </FilterCardActionsContainer>
    </FilterCard>
  );
}
