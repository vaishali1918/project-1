import React, { useState } from 'react';

const AddEmployee = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    name: '',
    username: '',
    password: '',
    department: '',
    designation: '',
  });

  const [salaryData, setSalaryData] = useState({
    baseSalary: '',
    hra: '',
    da: '',
    medical: '',
    otherAllowances: '',
    deductions: '',
  });

  const handleEmployeeChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const handleSalaryChange = (e) => {
    setSalaryData({ ...salaryData, [e.target.name]: e.target.value });
  };

  const calculateTotalSalary = () => {
    const { baseSalary, hra, da, medical, otherAllowances, deductions } = salaryData;
    const gross =
      Number(baseSalary) + Number(hra) + Number(da) + Number(medical) + Number(otherAllowances);
    return gross - Number(deductions);
  };

  const handleAddEmployee = () => {
    const existingEmployees = JSON.parse(localStorage.getItem('employees')) || [];

    const newEmployee = {
      ...employeeData,
      firstname: employeeData.name,
      tasks: [],
      taskCount: { active: 0, completed: 0, failed: 0, newTask: 0 },
    };

    localStorage.setItem('employees', JSON.stringify([...existingEmployees, newEmployee]));

    const existingSalary = JSON.parse(localStorage.getItem('salaryData')) || [];

    const newSalary = {
      name: employeeData.name,
      salary: calculateTotalSalary(),
      salaryBreakdown: {
        baseSalary: Number(salaryData.baseSalary),
        hra: Number(salaryData.hra),
        da: Number(salaryData.da),
        medical: Number(salaryData.medical),
        otherAllowances: Number(salaryData.otherAllowances),
        deductions: Number(salaryData.deductions),
      },
      records: Array.from({ length: 12 }, (_, i) => ({
        month: new Date(0, i).toLocaleString('default', { month: 'short' }),
        status: 'Pending',
        amount: calculateTotalSalary(),
      })),
    };

    localStorage.setItem('salaryData', JSON.stringify([...existingSalary, newSalary]));

    alert('Employee added successfully!');
    setShowForm(false);
    setEmployeeData({
      name: '',
      username: '',
      password: '',
      department: '',
      designation: '',
    });
    setSalaryData({
      baseSalary: '',
      hra: '',
      da: '',
      medical: '',
      otherAllowances: '',
      deductions: '',
    });

    if (onAdd) onAdd(); // trigger Admin to refresh employee list
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl mt-6 shadow-lg">
      <button
        className="bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-700"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Close' : 'Add Employee'}
      </button>

      {showForm && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Employee Info</h2>
            {['name', 'username', 'password', 'department', 'designation'].map((field) => (
              <input
                key={field}
                name={field}
                type="text"
                value={employeeData[field]}
                onChange={handleEmployeeChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full bg-gray-800 text-white p-2 my-2 rounded"
              />
            ))}
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Salary Breakdown</h2>
            {['baseSalary', 'hra', 'da', 'medical', 'otherAllowances', 'deductions'].map(
              (field) => (
                <input
                  key={field}
                  name={field}
                  type="number"
                  value={salaryData[field]}
                  onChange={handleSalaryChange}
                  placeholder={field}
                  className="w-full bg-gray-800 text-white p-2 my-2 rounded"
                />
              )
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              onClick={handleAddEmployee}
              className="bg-green-600 w-full py-2 rounded hover:bg-green-700"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEmployee;
