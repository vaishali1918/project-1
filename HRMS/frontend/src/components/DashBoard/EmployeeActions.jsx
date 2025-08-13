import React from 'react';

const EmployeeActions = ({ onPerformanceClick }) => {
  return (
    <div className='flex gap-4 mt-6 flex-wrap'>
      <button className='bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-800'>
        Update Salary
      </button>
      <button className='bg-yellow-600 text-white px-5 py-2 rounded hover:bg-yellow-800'>
        Pay Salary
      </button>
      <button className='bg-sky-600 text-white px-5 py-2 rounded hover:bg-blue-800'>
        Salary History
      </button>
      <button className='bg-green-600 text-white px-5 py-2 rounded hover:bg-green-800'>
        Attendance Records
      </button>
      <button
        className='bg-red-600 text-white px-5 py-2 rounded hover:bg-red-800'
        onClick={onPerformanceClick}
      >
        Performance Records
      </button>
    </div>
  );
};

export default EmployeeActions;
