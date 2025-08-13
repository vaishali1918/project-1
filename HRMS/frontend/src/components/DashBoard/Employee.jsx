import React, { useState } from 'react';
import TaskNumber from '../../others/TaskNumber';
import { Header } from '../../others/Header';
import TaskList from '../Task/TaskList';
import SalaryDashboard from './salaryDashboard';
import attendanceData from '../../utils/attendanceData';
import EmployeeAttendance from './EmployeeAttendance';

export const Employee = ({ data, changeUser }) => {
  const [currentView, setCurrentView] = useState('all');
  const [showSalaryDashboard, setShowSalaryDashboard] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);

  if (!data) {
    return <div className="text-white bg-black h-screen p-10">Loading...</div>;
  }

  // Safe search: handles undefined or lowercase mismatch
  const employeeAttendance = attendanceData.find(
    (emp) => emp.name?.toLowerCase() === data.firstname?.toLowerCase()
  );

  return (
    <div className="p-10 w-full min-h-screen bg-black text-white overflow-auto">
      {/* Header Section */}
      <Header data={data} changeUser={changeUser} />

      {/* Task Filters */}
      <TaskNumber data={data} setCurrentView={setCurrentView} />

      {/* Task List */}
      <TaskList data={data} currentView={currentView} />

      {/* Buttons to Toggle Salary/Attendance */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setShowSalaryDashboard((prev) => !prev)}
          className="bg-yellow-500 text-black px-5 py-2 rounded hover:bg-yellow-600 transition"
        >
          {showSalaryDashboard ? 'Hide' : 'View'} Salary Dashboard
        </button>

        <button
          onClick={() => setShowAttendance((prev) => !prev)}
          className={`px-5 py-2 rounded transition ${
            EmployeeAttendance
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-600 cursor-not-allowed'
          }`}
          disabled={!employeeAttendance}
        >
          {showAttendance ? 'Hide' : 'View'} Attendance Records
        </button>
      </div>

      {/* Salary Dashboard */}
      {showSalaryDashboard && (
        <div className="mt-8">
          <SalaryDashboard employeeName={data.firstname} />
        </div>
      )}

      {/* Attendance Dashboard */}
      {showAttendance && employeeAttendance && (
        <div className="mt-8">
          <EmployeeAttendance
            employeeName={employeeAttendance.name}
            attendance={employeeAttendance.monthly}
          />
        </div>
      )}
    </div>
  );
};
