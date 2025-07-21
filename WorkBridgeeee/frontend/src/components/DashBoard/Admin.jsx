import React, { useState, useEffect } from 'react';
import { Header } from '../../others/Header';
import { CreateTask } from '../../others/CreateTask';
import AllTask from '../../others/AllTask';
import Adminee from './admine';
import AddEmployee from './addEmployee';
import PaySalary from './paySalary';

export const Admin = (props) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(stored);
  }, []);

  const updateEmployeeList = () => {
    const updated = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(updated);
  };

  return (
    <div className='h-screen w-full p-10 bg-black-900 text-white'>
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AddEmployee onAdd={updateEmployeeList} />
      <PaySalary />
      <Adminee employees={employees} />
    </div>
  );
};
