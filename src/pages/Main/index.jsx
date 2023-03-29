import { useEffect, useState } from "react";
import { Card, MainCard, MainContainer, MainContent } from "./mainPageStyled";
import { FilterButton } from "../../components/buttons";
import Header from "../../components/Header";
import FilterIcon from "../../assets/filter.svg";
import FiltersCard from "../../components/FiltersCard";
import TransactionsTable from "../../components/TransactionsTable";
import TransactionsSummary from "../../components/TransactionsSummary";
import { useAuth } from "../../context";
import { useToggle } from "../../lib/customHooks";

export default function Main() {
  const [filters, setFilters] = useState([]);
  const [filtersList, setFiltersList] = useState([]);
  const [filtersModalOpen, setFiltersModalOpen] = useToggle();

  const { getCategories, getTransactionData, setTransactionsList, setTransactionsSummary } = useAuth();

  useEffect(() => {
    setTransactionsList([]);
    setTransactionsSummary({});
    getTransactionData();
    getCategories();
  }, []);

  function selectedFilter(categorie_name) {
    return filtersList.includes(categorie_name);
  }

  return (
    <MainContainer>
      <Header />
      <MainContent>
        <FilterButton type="button" onClick={setFiltersModalOpen}>
          <img src={FilterIcon} alt="Filter icon" />
          <span>Filtrar</span>
        </FilterButton>
        <MainCard>
          <Card>
            {filtersModalOpen && <FiltersCard selectedFilter={selectedFilter} filtersList={filtersList} setFilters={setFilters} setFiltersList={setFiltersList} />}
            <TransactionsTable filters={filters} />
          </Card>
          <TransactionsSummary />
        </MainCard>
      </MainContent>
    </MainContainer>
  );
}
