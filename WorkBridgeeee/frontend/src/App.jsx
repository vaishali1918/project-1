// App.jsx
import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { Login } from './components/Auth/Login';
import { Employee } from './components/DashBoard/Employee';
import { Admin } from './components/DashBoard/Admin';
import { AuthContext } from './context/AuthProvider';
import Landing from './components/DashBoard/landingPage';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppWrapper = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === '1234') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: 'admin' }));
      toast.success('✅ Login successful as Admin');
      navigate('/');
      return true;
    }

    if (userData) {
      const employee = userData.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
        toast.success('✅ Login successful as Employee');
        navigate('/');
        return true;
      }
    }

    toast.error('❌ Invalid credentials');
    return false;
  };

  if (user === 'admin') return <Admin data={loggedInUserData} changeUser={setUser} />;
  if (user === 'employee') return <Employee data={loggedInUserData} changeUser={setUser} />;

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
