import styled from 'styled-components';

export const StyledHeadline = styled.h1`
  text-align: center;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const StyledTableHead = styled.thead`
  background-color: #a4b3b6;
`;

export const StyledTableHeadCell = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #ebebeb;
  }
`;

export const StyledTableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledPaginationButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }
`;
