import { FilterButton, FiltersActionApplyButton } from "../buttons";
import { primaryColor, whiteSnowColor } from "../colors";
import { CategoriesFilters, CategoriesTittle, FilterCard, FilterCardActionsContainer } from "./filtersCardStyled";
import { useAuth } from "../../context";

export default function FiltersCard({ selectedFilter, filtersList, setFiltersList, setFilters }) {
  const { categoriesList, getTransactionData } = useAuth();
  function handleFilterClick(categorieName) {
    if (filtersList.includes(categorieName)) {
      setFiltersList(filtersList.filter((f) => f !== categorieName));
    } else {
      setFiltersList([...filtersList, categorieName]);
    }
  }

  function applyFiltersList() {
    getTransactionData(filtersList)
    setFilters(filtersList);
  }

  function cleanFiltersList() {
    getTransactionData()
    setFiltersList([]);
    setFilters([]);
  }

  return (
    <FilterCard>
      <CategoriesTittle>Categoria</CategoriesTittle>
      <CategoriesFilters>
        {categoriesList &&
          categoriesList.map((categorie) => (
            <FilterButton
              key={categorie.id}
              bgColor={primaryColor}
              afterContent={selectedFilter(categorie.nome) ? "x" : "+"}
              isSelected={selectedFilter(categorie.nome)}
              onClick={() => handleFilterClick(categorie.nome)}
            >
              <span>{categorie.nome}</span>
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
