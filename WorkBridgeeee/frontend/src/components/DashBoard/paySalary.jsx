import React, { useState, useEffect } from 'react';
import salaryData from '../../utils/salaryData';

const PaySalary = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [employees, setEmployees] = useState([]);
  const [data, setData] = useState(salaryData);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const handlePaySalary = () => {
    const updatedData = data.map(emp => {
      if (emp.id === selectedEmployee) {
        const updatedRecords = {
          ...emp.salaryRecords,
          [selectedMonth]: {
            status: 'Paid',
            paidOn: new Date().toLocaleDateString()
          }
        };
        return { ...emp, salaryRecords: updatedRecords };
      }
      return emp;
    });

    setData(updatedData);
    localStorage.setItem('salaryData', JSON.stringify(updatedData));
    alert('Salary paid successfully!');
  };

  return (
    <div className="p-5 rounded-lg shadow-md mt-5 bg-gray-900 text-white">
      <button
        onClick={() => setShowForm(prev => !prev)}
        className="bg-purple-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-2 w-38"
      >
        {showForm ? 'Hide Pay Salary' : 'Pay Salary'}
      </button>

      {showForm && (
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Select Employee:</label>
            <select
              value={selectedEmployee}
              onChange={e => setSelectedEmployee(e.target.value)}
              className="w-full px-4 py-2 rounded text-black"
            >
              <option value="">-- Select --</option>
              {data.map(emp => (
                <option key={emp.id} value={emp.id}>
                  {emp.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1">Select Month:</label>
            <select
              value={selectedMonth}
              onChange={e => setSelectedMonth(e.target.value)}
              className="w-full px-4 py-2 rounded text-black"
            >
              <option value="">-- Select --</option>
              {[
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
              ].map(month => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handlePaySalary}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Confirm Pay
          </button>
        </div>
      )}
    </div>
  );
};

export default PaySalary;
