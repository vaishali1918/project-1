import React from 'react';

const ActionButtons = ({
  onTogglePerformance,
  showPerformance,
  onShowAttendance,
  onShowSalaryHistory,
}) => (
  <div className="flex flex-wrap gap-4 mt-4">
    
    <button
      className="bg-sky-600 text-white px-5 py-2 rounded hover:bg-sky-800"
      onClick={onShowSalaryHistory}
    >
      Salary History
    </button>
    <button
      className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-800"
      onClick={onShowAttendance}
    >
      Attendance Records
    </button>
    <button
      className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-800"
      onClick={onTogglePerformance}
    >
      {showPerformance ? 'Hide Performance' : 'Show Performance'}
    </button>
  </div>
);

export default ActionButtons;
