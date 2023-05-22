import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Pagination from '../../atoms/Pagination/Pagination';
import {
  StyledTable,
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
  StyledPaginationContainer,
  StyledPaginationButton,
  StyledHeadline,
} from './style';

function UserList({ users, updateUsers }) {
  const [error, setError] = useState(null);
  const [usersData, setUsersData] = useState(users);
  const [editingUserId, setEditingUserId] = useState(null);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    setUsersData(users);
    setUserCount(users.length);
  }, [users]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

  const handleEdit = (userId) => {
    setEditingUserId(userId);
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
  };

  const handleUpdate = async (userId) => {
    const userToUpdate = usersData.find((user) => user._id === userId);
    try {
      const response = await axios.put(
        `http://localhost:5000/api/users/${userId}`,
        userToUpdate
      );
      const updatedUser = response.data;
      const updatedUsers = usersData.map((user) =>
        user._id === userId ? updatedUser : user
      );
      updateUsers(updatedUsers);
      setEditingUserId(null);
    } catch (error) {
      setError(error.message || 'Klaida atnaujinant vartotoją');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      const updatedUsers = usersData.filter((user) => user._id !== id);
      updateUsers(updatedUsers);
    } catch (err) {
      setError(err.message || 'Klaida ištrinant vartotoją');
    }
  };

  if (error) {
    return <div>Klaida: {error}</div>;
  }

  return (
    <div>
      <StyledHeadline>User List</StyledHeadline>
      <StyledTable>
        <StyledTableHead>
          <tr>
            <StyledTableHeadCell>Nr.</StyledTableHeadCell>
            <StyledTableHeadCell>Name</StyledTableHeadCell>
            <StyledTableHeadCell>Surname</StyledTableHeadCell>
            <StyledTableHeadCell>Email</StyledTableHeadCell>
            <StyledTableHeadCell>Age</StyledTableHeadCell>
            <StyledTableHeadCell>Actions</StyledTableHeadCell>
          </tr>
        </StyledTableHead>
        <StyledTableBody>
          {currentUsers.map((user, index) => (
            <StyledTableRow key={user._id}>
              <StyledTableCell>{indexOfFirstUser + index + 1}</StyledTableCell>
              <StyledTableCell>
                {editingUserId === user._id ? (
                  <Input
                    type='text'
                    value={user.name}
                    onChange={(e) => {
                      const updatedName = e.target.value;
                      setUsersData((prevUsersData) =>
                        prevUsersData.map((prevUser) =>
                          prevUser._id === user._id
                            ? { ...prevUser, name: updatedName }
                            : prevUser
                        )
                      );
                    }}
                  />
                ) : (
                  user.name
                )}
              </StyledTableCell>
              <StyledTableCell>
                {editingUserId === user._id ? (
                  <Input
                    type='text'
                    value={user.surname}
                    onChange={(e) => {
                      const updatedSurname = e.target.value;
                      setUsersData((prevUsersData) =>
                        prevUsersData.map((prevUser) =>
                          prevUser._id === user._id
                            ? { ...prevUser, surname: updatedSurname }
                            : prevUser
                        )
                      );
                    }}
                  />
                ) : (
                  user.surname
                )}
              </StyledTableCell>
              <StyledTableCell>
                {editingUserId === user._id ? (
                  <Input
                    type='email'
                    value={user.email}
                    onChange={(e) => {
                      const updatedEmail = e.target.value;
                      setUsersData((prevUsersData) =>
                        prevUsersData.map((prevUser) =>
                          prevUser._id === user._id
                            ? { ...prevUser, email: updatedEmail }
                            : prevUser
                        )
                      );
                    }}
                  />
                ) : (
                  user.email
                )}
              </StyledTableCell>
              <StyledTableCell>
                {editingUserId === user._id ? (
                  <Input
                    type='number'
                    value={user.age}
                    onChange={(e) => {
                      const updatedAge = e.target.value;
                      setUsersData((prevUsersData) =>
                        prevUsersData.map((prevUser) =>
                          prevUser._id === user._id
                            ? { ...prevUser, age: updatedAge }
                            : prevUser
                        )
                      );
                    }}
                  />
                ) : (
                  user.age
                )}
              </StyledTableCell>
              <StyledTableCell>
                {editingUserId === user._id ? (
                  <>
                    <Button onClick={() => handleUpdate(user._id)}>Save</Button>
                    <Button onClick={handleCancelEdit}>Cancel</Button>
                  </>
                ) : (
                  <Button onClick={() => handleEdit(user._id)}>Edit</Button>
                )}
                <Button onClick={() => handleDelete(user._id)}>Delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
      <StyledPaginationContainer>
        <Pagination
          usersData={usersData}
          usersPerPage={10}
          setCurrentPage={setCurrentPage}
        />
      </StyledPaginationContainer>
    </div>
  );
}

export default UserList;
