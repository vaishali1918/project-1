// components/EmployeeAttendance.jsx
import React, { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  FaCheckCircle,
  FaTimesCircle,
  FaRegCalendarMinus,
} from 'react-icons/fa';

const COLORS = ['#22c55e', '#ef4444', '#facc15'];

const EmployeeAttendance = ({ employeeName, attendance }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const totalPresent = attendance.reduce((sum, m) => sum + m.present, 0);
  const totalAbsent = attendance.reduce((sum, m) => sum + m.absent, 0);
  const totalLeaves = attendance.reduce((sum, m) => sum + m.leaves, 0);

  const fullYearPieData = [
    { name: 'Present', value: totalPresent },
    { name: 'Absent', value: totalAbsent },
    { name: 'Leaves', value: totalLeaves },
  ];

  const getMonthPieData = (monthObj) => [
    { name: 'Present', value: monthObj.present },
    { name: 'Absent', value: monthObj.absent },
    { name: 'Leaves', value: monthObj.leaves },
  ];

  return (
    <div className="bg-black text-white p-5 mt-6 rounded-lg shadow-lg">
      <h2 className="text-yellow-400 text-2xl font-bold mb-6">
        📋 Attendance Record for {employeeName}
      </h2>

      {/* Full Year Attendance Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-700 shadow">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gradient-to-r from-gray-800 to-gray-700 text-yellow-300">
            <tr>
              <th className="py-3 px-4 border-gray-600 border-r">📆 Month</th>
              <th className="py-3 px-4 border-gray-600 border-r">✅ Present</th>
              <th className="py-3 px-4 border-gray-600 border-r">❌ Absent</th>
              <th className="py-3 px-4">📝 Leaves</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((month, index) => (
              <tr
                key={index}
                className={`cursor-pointer transition-all duration-200 ${
                  index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'
                } hover:bg-gray-700`}
                onClick={() => setSelectedMonth(month)}
              >
                <td className="py-3 px-4 border-gray-700 border-r font-medium">
                  {month.month}
                </td>
                <td className="py-3 px-4 border-gray-700 border-r text-green-400 font-semibold">
                  {month.present}
                </td>
                <td className="py-3 px-4 border-gray-700 border-r text-red-400 font-semibold">
                  {month.absent}
                </td>
                <td className="py-3 px-4 text-yellow-300 font-semibold">
                  {month.leaves}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed Month View */}
      {selectedMonth && (
        <div className="mt-6 bg-gray-900 rounded-lg p-5 border border-gray-700">
          <h3 className="text-xl text-blue-400 font-bold mb-4">
            📅 Detailed View - {selectedMonth.month}
          </h3>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Numbers */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded p-4 flex items-center justify-between text-green-400 shadow">
                <FaCheckCircle size={24} />
                <span className="font-semibold">Present</span>
                <span className="text-lg">{selectedMonth.present}</span>
              </div>
              <div className="bg-gray-800 rounded p-4 flex items-center justify-between text-red-400 shadow">
                <FaTimesCircle size={24} />
                <span className="font-semibold">Absent</span>
                <span className="text-lg">{selectedMonth.absent}</span>
              </div>
              <div className="bg-gray-800 rounded p-4 flex items-center justify-between text-yellow-300 shadow">
                <FaRegCalendarMinus size={24} />
                <span className="font-semibold">Leaves</span>
                <span className="text-lg">{selectedMonth.leaves}</span>
              </div>
            </div>

            {/* Monthly Pie Chart */}
            <div className="flex-1 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={getMonthPieData(selectedMonth)}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {getMonthPieData(selectedMonth).map((entry, idx) => (
                      <Cell key={`month-${idx}`} fill={COLORS[idx]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                        backgroundColor: '#1f1f1f', // dark background
                        border: '1px solid #333',
                        color: '#fff',              // white text
                    }}
                    itemStyle={{ color: '#fff' }}  // white for each item line
                    labelStyle={{ color: '#fff' }} // white label
                    />

                  <Legend formatter={(val) => <span style={{ color: 'white' }}>{val}</span>} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Yearly Attendance Pie Chart */}
      <div className="mt-10">
        <h3 className="text-yellow-400 text-xl font-semibold mb-4">
          📊 Full Year Attendance Overview
        </h3>
        <div className="w-full h-80 bg-gray-900 rounded-lg p-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={fullYearPieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(1)}%`
                }
              >
                {fullYearPieData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                    backgroundColor: '#1f1f1f', // dark background
                    border: '1px solid #333',
                    color: '#fff',              // white text
                }}
                itemStyle={{ color: '#fff' }}  // white for each item line
                labelStyle={{ color: '#fff' }} // white label
                />

              <Legend formatter={(val) => <span style={{ color: 'white' }}>{val}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendance;
