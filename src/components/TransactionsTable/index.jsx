import React, { useState, useEffect, Fragment } from "react";
import TransactionRow from "../TransactionsRow";
import SortIconSvg from "../../assets/ico-asc.svg";
import { PaginadeTableContainer, SortIcon, Table, TableHeader, Th, Tr } from "./tableStyles";
import { FiltersActionApplyButton } from "../buttons";
import { primaryColor, whitePureColor, whiteSnowColor } from "../colors";
import { useTransaction } from "../../context";

function TransactionsTable({ filters }) {
  const { transactionsList } = useTransaction();
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnyWarningModalOpen, setAnyWarningModalOpen] = useState(null);
  const perPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  let sortedList = transactionsList.sort((a, b) => {
    const dateA = new Date(a.data);
    const dateB = new Date(b.data);
    return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
  });

  function toggleSortDirection() {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  }

  function handleOpenModal(id) {
    setAnyWarningModalOpen(id);
  }

  const paginatedData = paginate(sortedList, currentPage, perPage);

  function handlePageClick(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function selectedPage(pageNumber) {
    return currentPage === pageNumber;
  }

  function renderPageButtons() {
    const pages = [];
    for (let i = 1; i <= paginatedData.totalPages; i++) {
      pages.push(
        <FiltersActionApplyButton
          key={i}
          textColor={selectedPage(i) ? `${whitePureColor}` : "black"}
          bgColor={selectedPage(i) ? `${primaryColor}` : `${whiteSnowColor}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </FiltersActionApplyButton>
      );
    }
    return pages;
  }

  return (
    <>
      <Fragment key="table">
        <Table>
          <TableHeader>
            <Tr>
              <Th width="163px" title="Clique para ordenar" className={sortDirection} onClick={toggleSortDirection}>
                Data
                <SortIcon
                  src={sortDirection === "asc" ? SortIconSvg : SortIconSvg}
                  alt={sortDirection === "asc" ? "Ordenar crescente" : "Ordenar decrescente"}
                  className={sortDirection}
                />
              </Th>
              <Th width="152px">Dia da semana</Th>
              <th>Descrição</th>
              <Th width="200px">Categoria</Th>
              <Th width="150px">Valor</Th>
              <th></th>
            </Tr>
          </TableHeader>
          <tbody>
            {paginatedData.items.map((transaction) => (
              <TransactionRow key={transaction.id} transaction={transaction} isOpen={isAnyWarningModalOpen} onOpen={handleOpenModal} />
            ))}
          </tbody>
        </Table>
      </Fragment>
      <Fragment key="pagination">
        <PaginadeTableContainer>{renderPageButtons()}</PaginadeTableContainer>
      </Fragment>
    </>
  );
}

export default TransactionsTable;

function paginate(items, page = 1, perPage = 10) {
  const offset = perPage * (page - 1);
  const totalPages = Math.ceil(items.length / perPage);
  const paginatedItems = items.slice(offset, perPage * page);

  return {
    previousPage: page - 1 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    total: items.length,
    totalPages,
    items: paginatedItems,
  };
}
