import React from 'react';
import { StyledButton } from './style.js';

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
