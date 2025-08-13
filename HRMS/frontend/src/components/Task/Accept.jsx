import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Accept = ({ data: task, userEmail }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleUpdateStatus = (statusType) => {
    const updatedUserData = { ...userData };
    const employee = updatedUserData.employees.find(emp => emp.email === userEmail);

    const index = employee.tasks.findIndex(t => t.taskTitle === task.taskTitle);

    if (index !== -1) {
      employee.tasks[index].active = false;

      if (statusType === 'complete') {
        employee.tasks[index].completed = true;
        employee.tasks[index].failed = false;
        employee.taskCount.completed += 1;
      } else if (statusType === 'failed') {
        employee.tasks[index].failed = true;
        employee.tasks[index].completed = false;
        employee.taskCount.failed += 1;
      }

      employee.taskCount.active -= 1;

      setUserData(updatedUserData);
      localStorage.setItem('employees', JSON.stringify(updatedUserData.employees));
    }
  };

  return (
    <div className="bg-[#2A2A2A] rounded-xl p-6 min-w-[300px]">
      <h3 className="text-xl font-semibold text-white mb-2">{task.taskTitle}</h3>
      <p className="text-sm text-gray-300">{task.taskDescription}</p>
      <p className="text-sm text-gray-400 mt-2">Due Date: {task.taskDate}</p>
      <p className="text-sm text-gray-400">Category: {task.category}</p>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => handleUpdateStatus('complete')}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 text-white text-sm"
        >
          Mark as Complete
        </button>
        <button
          onClick={() => handleUpdateStatus('failed')}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 text-white text-sm"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default Accept;
