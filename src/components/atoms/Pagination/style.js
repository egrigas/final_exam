import styled from 'styled-components';

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const StyledPaginationButton = styled.button`
  padding: 8px;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? 'blue' : 'gray')};
  color: white;
  border: none;
  cursor: pointer;
`;
