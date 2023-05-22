import React from 'react';
import { StyledPaginationContainer, StyledPaginationButton } from './style';

const Pagination = ({ usersData, usersPerPage, setCurrentPage }) => {
  const totalPages = Math.ceil(usersData.length / usersPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <StyledPaginationButton key={i} onClick={() => handlePageChange(i)}>
          {i}
        </StyledPaginationButton>
      );
    }

    return buttons;
  };

  return (
    <StyledPaginationContainer>
      {renderPaginationButtons()}
    </StyledPaginationContainer>
  );
};

export default Pagination;
