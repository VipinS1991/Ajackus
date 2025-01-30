import React from 'react';

const UserList = ({ users, deleteUser, setEditingUser }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => setEditingUser(user)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
