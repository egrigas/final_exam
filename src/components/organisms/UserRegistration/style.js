import styled from 'styled-components';

export const StyledHeadline = styled.h1`
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const StyledError = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  background-color: #f1f9ff;

  &:focus {
    border-color: #007bff;
  }
`;

export const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #aed6f1;
  }
`;
