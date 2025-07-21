import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskCard = ({ data, userEmail, viewType }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const updateTaskStatus = (status) => {
    const updatedUserData = { ...userData };

    let updatedEmployee = null;

    updatedUserData.employees = updatedUserData.employees.map((employee) => {
      if (employee.email === userEmail) {
        const updatedTasks = employee.tasks.map((task) => {
          if (
            task.taskTitle === data.taskTitle &&
            task.taskDate === data.taskDate
          ) {
            return {
              ...task,
              newTask: false,
              active:
                status === "accept" || status === "complete" || status === "fail"
                  ? status === "accept"
                    ? true
                    : false
                  : false,
              completed: status === "complete",
              failed: status === "fail" || status === "reject",
            };
          }
          return task;
        });

        const taskCount = {
          newTask: updatedTasks.filter((t) => t.newTask && t.active).length,
          active: updatedTasks.filter(
            (t) => !t.newTask && t.active && !t.completed && !t.failed
          ).length,
          completed: updatedTasks.filter((t) => t.completed).length,
          failed: updatedTasks.filter((t) => t.failed).length,
        };

        updatedEmployee = {
          ...employee,
          tasks: updatedTasks,
          taskCount,
        };

        return updatedEmployee;
      }
      return employee;
    });

    setUserData(updatedUserData);

    // ✅ Persist updated user info for logged-in session
    if (updatedEmployee) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: updatedEmployee })
      );
    }

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedUserData.employees)
    );
  };

  return (
    <div className="bg-[#111] text-white w-[300px] rounded-xl shadow-lg p-5 border border-gray-600">
      <h2 className="text-xl font-bold mb-2">{data.taskTitle}</h2>
      <p className="text-sm text-gray-400 mb-2">{data.taskDate}</p>
      <p className="mb-3 text-sm">{data.taskDescription}</p>
      <p className="text-xs text-gray-300 italic mb-2">
        Category: {data.category}
      </p>

      {data.completed && (
        <p className="text-green-400 font-bold text-sm mt-2">✔ Completed</p>
      )}
      {data.failed && (
        <p className="text-red-400 font-bold text-sm mt-2">✖ Failed</p>
      )}

      {viewType === "new" && (
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => updateTaskStatus("accept")}
            className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-800 text-sm"
          >
            Accept
          </button>
          <button
            onClick={() => updateTaskStatus("reject")}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-800 text-sm"
          >
            Reject
          </button>
        </div>
      )}

      {viewType === "active" && (
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => updateTaskStatus("complete")}
            className="bg-green-600 px-3 py-1 rounded hover:bg-green-800 text-sm"
          >
            Mark Complete
          </button>
          <button
            onClick={() => updateTaskStatus("fail")}
            className="bg-pink-600 px-3 py-1 rounded hover:bg-pink-800 text-sm"
          >
            Mark Failed
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
