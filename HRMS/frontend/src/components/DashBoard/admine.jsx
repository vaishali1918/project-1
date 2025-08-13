import React, { useContext, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AuthContext } from '../../context/AuthProvider';
import ActionButtons from './ActionButtons';
import AllTask from '../../others/AllTask';
import EmployeeAttendance from './EmployeeAttendance';
import attendanceData from '../../utils/attendanceData';
import salaryData from '../../utils/salaryData';
import SalaryModal from './SalaryModal';

const Adminee = () => {
  const [userData] = useContext(AuthContext);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showPerformance, setShowPerformance] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [showSalary, setShowSalary] = useState(false);
  const [modalRecord, setModalRecord] = useState(null);

  const renderPerformanceChart = (taskCount) => {
    const data = [
      { name: "New", value: taskCount.newTask, color: "#facc15" },
      { name: "Active", value: taskCount.active, color: "#3b82f6" },
      { name: "Completed", value: taskCount.completed, color: "#22c55e" },
      { name: "Failed", value: taskCount.failed, color: "#ef4444" },
    ];

    return (
      <div className="w-full mt-6 flex flex-col md:flex-row gap-6 text-white">
        <div className="w-full md:w-1/2 h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, idx) => (
                  <Cell key={idx} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
              <Legend formatter={(val) => <span style={{ color: "white" }}>{val}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/2 space-y-2">
          {data.map((item, idx) => {
            const total = data.reduce((acc, d) => acc + d.value, 0);
            const percent = ((item.value / total) * 100).toFixed(1);
            return (
              <div key={idx} className="flex justify-between text-sm border-b border-gray-600">
                <span>{item.name}</span>
                <span>{percent}%</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderSalaryDashboard = () => {
  const emp = salaryData.find(
    (e) => e.name.toLowerCase() === selectedEmployee.firstname.toLowerCase()
  );
  if (!emp) return <p className="text-red-500">No salary data found.</p>;

  const totalPaid = emp.records
    .filter(r => r.status === 'Paid')
    .reduce((sum, r) => sum + r.amount, 0);
  const totalPending = emp.records
    .filter(r => r.status === 'Pending')
    .reduce((sum, r) => sum + r.amount, 0);
  const overdueCount = emp.records.filter(r => r.status === 'Pending').length;

  const pie = [
    { name: 'Paid', value: totalPaid, color: '#22c55e' },
    { name: 'Pending', value: totalPending, color: '#ef4444' }
  ];

  const breakdown = emp.salaryBreakdown;
  const totalEarnings =
    breakdown.baseSalary +
    breakdown.hra +
    breakdown.da +
    breakdown.medical +
    breakdown.otherAllowances;

  const netSalary = totalEarnings - breakdown.deductions;

  return (
    <div className="bg-[#111827] text-white p-6 rounded-lg mt-8 shadow-lg">
      <h3 className="text-2xl font-bold text-yellow-400 mb-6">
        Salary Summary - {emp.name}
      </h3>

      {/* Salary Breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded shadow">
          <p className="text-sm text-gray-400">Base Salary</p>
          <p className="text-lg font-semibold text-green-400">₹{breakdown.baseSalary}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow">
          <p className="text-sm text-gray-400">HRA</p>
          <p className="text-lg font-semibold text-green-400">₹{breakdown.hra}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow">
          <p className="text-sm text-gray-400">DA</p>
          <p className="text-lg font-semibold text-green-400">₹{breakdown.da}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow">
          <p className="text-sm text-gray-400">Medical</p>
          <p className="text-lg font-semibold text-green-400">₹{breakdown.medical}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow">
          <p className="text-sm text-gray-400">Other Allowances</p>
          <p className="text-lg font-semibold text-green-400">₹{breakdown.otherAllowances}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded shadow">
          <p className="text-sm text-gray-400">Deductions</p>
          <p className="text-lg font-semibold text-red-400">₹{breakdown.deductions}</p>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-4 bg-gray-800 px-4 py-3 rounded-md mb-8 text-sm md:text-base">
        <p><strong>Total Earnings:</strong> ₹{totalEarnings}</p>
        <p><strong>Net Salary:</strong> ₹{netSalary}</p>
        <p><strong>Total Paid:</strong> ₹{totalPaid}</p>
        <p><strong>Pending:</strong> ₹{totalPending}</p>
        <p><strong>Overdue Months:</strong> <span className="text-red-400">{overdueCount}</span></p>
      </div>

      {/* Salary Table */}
      <div className="overflow-auto max-h-96 mb-8">
        <table className="w-full border border-gray-700 text-sm">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-2 border">Month</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Paid Date</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {emp.records.map((r, idx) => (
              <tr key={idx} className="text-center">
                <td className="border px-2 py-1">{r.month}</td>
                <td
                  className={`border px-2 py-1 ${
                    r.status === 'Pending' ? 'text-red-400' : 'text-green-400'
                  }`}
                >
                  {r.status}
                </td>
                <td className="border px-2 py-1">₹{r.amount}</td>
                <td className="border px-2 py-1">{r.paidDate || '—'}</td>
                <td className="border px-2 py-1">
                  {r.status === 'Paid' ? (
                    <button
                      className="bg-blue-600 hover:bg-blue-800 px-3 py-1 rounded text-white text-sm"
                      onClick={() => setModalRecord(r)}
                    >
                      Generate Slip
                    </button>
                  ) : (
                    <button className="bg-green-600 hover:bg-green-800 px-3 py-1 rounded text-white text-sm">
                      Pay Now
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pie Chart Section - moved downward */}
      <div className="h-80 mt-10">
        <h3 className="text-lg font-semibold mb-2">Paid vs Pending Overview</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pie}
              dataKey="value"
              outerRadius={100}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {pie.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
            <Legend formatter={(val) => <span style={{ color: "white" }}>{val}</span>} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Modal for Generate Slip */}
      <SalaryModal
        open={!!modalRecord}
        onClose={() => setModalRecord(null)}
        employee={emp}
        record={modalRecord}
      />
    </div>
  );
};

  const currentAttendance = selectedEmployee && attendanceData.find(
    (emp) => emp.name.toLowerCase() === selectedEmployee.firstname.toLowerCase()
  );

  if (!selectedEmployee) {
    return (
      <div className="bg-[#1C1C1C] p-5 rounded mt-5 text-white">
        <div className="bg-yellow-400 text-black flex justify-between px-4 py-2 rounded mb-3">
          <h2 className="w-1/5">Employee Name</h2>
          <h2 className="w-1/5">Total Tasks</h2>
          <h2 className="w-1/5">Active</h2>
          <h2 className="w-1/5">Completed</h2>
          <h2 className="w-1/5">Failed</h2>
        </div>
        <div className="h-80 overflow-auto">
          {userData.employees.map((emp, idx) => (
            <div
              key={idx}
              className="flex justify-between px-4 py-2 bg-black border border-blue-700 mb-2 rounded hover:bg-gray-800 cursor-pointer"
              onClick={() => {
                setSelectedEmployee(emp);
                setShowPerformance(false);
                setShowAttendance(false);
                setShowSalary(false);
              }}
            >
              <h2 className="w-1/5">{emp.firstname}</h2>
              <h2 className="w-1/5">{emp.tasks.length}</h2>
              <h2 className="w-1/5">{emp.taskCount.active}</h2>
              <h2 className="w-1/5">{emp.taskCount.completed}</h2>
              <h2 className="w-1/5">{emp.taskCount.failed}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1C1C1C] p-5 rounded mt-5 text-white">
      <button
        onClick={() => {
          setSelectedEmployee(null);
          setShowPerformance(false);
          setShowAttendance(false);
          setShowSalary(false);
        }}
        className="mb-4 px-4 py-2 rounded bg-yellow-400 text-black hover:bg-yellow-500"
      >
        ← Back to Employee List
      </button>

      <h2 className="text-yellow-400 text-xl font-semibold mb-4">
        {selectedEmployee.firstname}'s Dashboard
      </h2>

      <AllTask tasks={selectedEmployee.tasks} />

      <ActionButtons
        showPerformance={showPerformance}
        onTogglePerformance={() => {
          setShowPerformance((prev) => !prev);
          setShowAttendance(false);
          setShowSalary(false);
        }}
        onShowAttendance={() => {
          setShowAttendance((prev) => !prev);
          setShowPerformance(false);
          setShowSalary(false);
        }}
        onShowSalaryHistory={() => {
          setShowSalary((prev) => !prev);
          setShowPerformance(false);
          setShowAttendance(false);
        }}
      />

      {showPerformance && renderPerformanceChart(selectedEmployee.taskCount)}
      {showAttendance && currentAttendance && (
        <EmployeeAttendance
          employeeName={selectedEmployee.firstname}
          attendance={currentAttendance.monthly}
        />
      )}
      {showSalary && renderSalaryDashboard()}
    </div>
  );
};

export default Adminee;
