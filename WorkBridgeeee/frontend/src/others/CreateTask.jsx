import React, { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

export const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const assignInputRef = useRef(null);

  // Filter employee names based on input value
  const handleAssignChange = (e) => {
    const input = e.target.value;
    setAssign(input);
    if (input.length > 0) {
      const filtered = userData.employees
        .map(emp => emp.firstname)
        .filter(name => name.toLowerCase().startsWith(input.toLowerCase()));
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  // When user clicks on a suggestion
  const selectSuggestion = (name) => {
    setAssign(name);
    setShowSuggestions(false);
  };

  // Close suggestions if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (assignInputRef.current && !assignInputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle: title,
      taskDescription,
      taskDate,
      category,
      active: true,
      newTask: false,
      failed: false,
      completed: false,
    };

    const updatedData = { ...userData };
    let taskAdded = false;

    updatedData.employees = updatedData.employees.map((employee) => {
      if (employee.firstname === assign) {
        taskAdded = true;
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskCount: {
            ...employee.taskCount,
            newTask: employee.taskCount.newTask + 1,
          },
        };
      }
      return employee;
    });

    if (!taskAdded) {
      alert("Employee not found! Please enter a valid employee name.");
      return;
    }

    setUserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData.employees));

    setTitle("");
    setAssign("");
    setTaskDate("");
    setTaskDescription("");
    setCategory("");
  };

  return (
    <div id="taskall-bar2" className="p-5 bg-[#1C1C1C] mt-7 rounded relative">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2" ref={assignInputRef}>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Enter Task"
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              required
            />
          </div>
          <div className="relative">
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assign}
              onChange={handleAssignChange}
              onFocus={() => {
                if(assign.length > 0) setShowSuggestions(true);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
              autoComplete="off"
              required
            />
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute z-10 bg-[#222] border border-gray-600 w-4/5 max-h-40 overflow-y-auto rounded shadow-lg text-white">
                {suggestions.map((name, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-1 cursor-pointer hover:bg-gray-700"
                    onClick={() => selectSuggestion(name)}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Type of Work"
              required
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            cols={30}
            rows={10}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};
