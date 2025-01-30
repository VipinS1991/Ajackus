import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import './App.css'; 

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const addUser = (newUser) => {
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(response => {
        setUsers([...users, response.data]);
      })
      .catch(error => console.log(error));
  };

  const editUser = (updatedUser) => {
    
    const updatedUsers = users.map(user =>
      user.id === updatedUser.id ? { ...user, name: updatedUser.name, email: updatedUser.email } : user
    );
    setUsers(updatedUsers); 
    setEditingUser(null); 
  };
  

  const deleteUser = (userId) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      <AddUser addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} setEditingUser={setEditingUser} />
      {editingUser && <EditUser user={editingUser} editUser={editUser} />}
    </div>
  );
};

export default App;
