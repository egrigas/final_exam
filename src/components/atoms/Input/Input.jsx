import React from 'react';
import { StyledInput } from './style';

class Input extends React.Component {
  render() {
    const { type, value, onChange, placeholder } = this.props;

    return (
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
