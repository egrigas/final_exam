import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import {
  StyledForm,
  StyledError,
  StyledInput,
  StyledButton,
  StyledHeadline,
} from './style';

function UserRegistration({ users, updateUsers }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !surname || !email || !age) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users', {
        name,
        surname,
        email,
        age,
      });
      const savedUser = response.data;
      setName('');
      setSurname('');
      setEmail('');
      setAge('');
      setError(null);
      updateUsers([...users, savedUser]);
    } catch (err) {
      setError(err.message || 'Klaida registruojant vartotoją');
    }
  };

  return (
    <div>
      <StyledHeadline>User Registration</StyledHeadline>
      <StyledForm onSubmit={handleSubmit}>
        {error && <StyledError>Klaida: {error}</StyledError>}
        <StyledInput
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
        />
        <StyledInput
          type='text'
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder='Surname'
        />
        <StyledInput
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <StyledInput
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder='Age'
        />
        <Button type='submit'>Register</Button>
      </StyledForm>
    </div>
  );
}

export default UserRegistration;
