import React, { useState, useEffect } from 'react';

const EditUser = ({ user, editUser }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  // Ensuring that the form fields update with the user's data when editing
  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  // Handle form submission for updating user
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form behavior (page reload)
    if (name && email) {
        console.log("Updating user with ID:", user.id, "Name:", name, "Email:", email);
      editUser({ id: user.id, name, email });
    } else {
      console.log("Both name and email are required.");
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
