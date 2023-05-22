import React, { useEffect, useState } from 'react';
import UserRegistration from './components/organisms/UserRegistration/UserRegistration';
import UserList from './components/organisms/UserList/UserList';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      const fetchedUsers = response.data;
      setUsers(fetchedUsers);
    } catch (error) {
      setError(error.message || 'Klaida gaunant vartotojų sąrašą');
    }
  };

  const updateUsers = (updatedUsers) => {
    setUsers(updatedUsers);
  };

  if (error) {
    return <div>Klaida: {error}</div>;
  }

  return (
    <div>
      <UserRegistration users={users} updateUsers={updateUsers} />
      <UserList users={users} updateUsers={updateUsers} />
    </div>
  );
}

export default App;
