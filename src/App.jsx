import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/profile';
import EditProfile from './components/EditProfile';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(savedUsers);
  }, []);

  const handleRegister = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('loggedInUserEmail', newUser.email);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login users={users} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/profile" element={<Profile users={users} />} />
        <Route path="/edit-profile" element={<EditProfile users={users} setUsers={setUsers} />} />
      </Routes>
    </Router>
  );
};

export default App;
