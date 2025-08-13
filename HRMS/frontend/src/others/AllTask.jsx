// components/TaskList.jsx
import React from 'react';

const AllTask = ({ tasks }) => {
  return (
    <div className="bg-black p-4 rounded mb-4 h-80 overflow-auto text-white">
      {tasks.length === 0 ? (
        <p className="text-gray-400">No tasks assigned.</p>
      ) : (
        tasks.map((task, idx) => (
          <div
            key={idx}
            className={`mb-4 p-3 rounded border ${
              task.completed
                ? 'border-green-500 bg-green-900'
                : task.failed
                ? 'border-red-500 bg-red-900'
                : 'border-blue-700 bg-gray-900'
            }`}
          >
            <h3 className="font-semibold">{task.taskTitle}</h3>
            <p>{task.taskDescription}</p>
            <p className="text-xs italic text-gray-400">
              Status:{' '}
              {task.completed
                ? 'Completed'
                : task.failed
                ? 'Failed'
                : task.active
                ? 'Active'
                : task.newTask
                ? 'New Task'
                : 'Unknown'}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default AllTask;
