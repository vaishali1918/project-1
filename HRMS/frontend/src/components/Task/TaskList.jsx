import React, { useState } from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ data, currentView }) => {
  if (!data) return null;

  let filteredTasks = [];

  if (currentView === "new") {
    filteredTasks = data.tasks.filter((t) => t.newTask && t.active);
  } else if (currentView === "active") {
    filteredTasks = data.tasks.filter((t) => t.active && !t.newTask && !t.completed && !t.failed);
  } else if (currentView === "completed") {
    filteredTasks = data.tasks.filter((t) => t.completed);
  } else if (currentView === "failed") {
    filteredTasks = data.tasks.filter((t) => t.failed);
  } else {
    filteredTasks = data.tasks;
  }

  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - cardsPerPage));
  };

  const handleNext = () => {
    if (startIndex + cardsPerPage < filteredTasks.length) {
      setStartIndex((prev) => prev + cardsPerPage);
    }
  };

  const visibleTasks = filteredTasks.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="mt-6 w-full">
      {filteredTasks.length === 0 ? (
        <p className="text-white text-sm">No tasks to display.</p>
      ) : (
        <>
          {/* Navigation Buttons */}
          <div className="flex justify-between mb-4 px-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`text-white px-4 py-2 bg-gray-700 rounded ${startIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-600"}`}
            >
              ⬅ Prev
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + cardsPerPage >= filteredTasks.length}
              className={`text-white px-4 py-2 bg-gray-700 rounded ${startIndex + cardsPerPage >= filteredTasks.length ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-600"}`}
            >
              Next ➡
            </button>
          </div>

          {/* Centered Task Cards */}
          <div className="flex justify-center gap-5 overflow-hidden flex-wrap">
            {visibleTasks.map((task, index) => (
              <TaskCard
                key={index}
                data={task}
                userEmail={data.email}
                viewType={currentView}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TaskList;
