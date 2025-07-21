import React, { useState } from 'react';
import salaryData from '../utils/salaryData';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SalaryModal from '../components/SalaryModal';

const SalaryHistory = ({ employeeName }) => {
  const employee = salaryData.find(e => e.name === employeeName);
  const [modalRec, setModalRec] = useState(null);
  const [records, setRecords] = useState([...employee.records]);

  const handlePayNow = (index) => {
    const updatedRecords = [...records];
    updatedRecords[index].status = 'Paid';
    updatedRecords[index].paidDate = new Date().toLocaleDateString(); // Add payment date
    setRecords(updatedRecords);
  };

  const totalPaid = records
    .filter(r => r.status === 'Paid').reduce((s, x) => s + x.amount, 0);
  const totalPending = records
    .filter(r => r.status === 'Pending').reduce((s, x) => s + x.amount, 0);
  const overdueCount = records.filter(r => r.status === 'Pending').length;

  const pie = [
    { name: 'Paid', value: totalPaid, color: '#22c55e' },
    { name: 'Pending', value: totalPending, color: '#ef4444' }
  ];

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">{employee.name} – Salary History</h2>
      <div className="flex gap-6 flex-wrap mb-6">
        <div><strong>Total Paid:</strong> ₹{totalPaid}</div>
        <div><strong>Pending Amount:</strong> ₹{totalPending}</div>
        <div><strong>Overdue Count:</strong> <span className="text-red-400">{overdueCount}</span></div>
      </div>

      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={pie} dataKey="value" label>
              {pie.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <table className="w-full table-auto border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="border px-4 py-2">Month</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i} className="hover:bg-gray-700">
              <td className="border px-4 py-2">{r.month}</td>
              <td className={`border px-4 py-2 ${r.status === 'Pending' ? 'text-red-400' : 'text-green-400'}`}>
                {r.status}
              </td>
              <td className="border px-4 py-2">₹{r.amount}</td>
              <td className="border px-4 py-2">
                {r.status === 'Paid' ? (
                  <button
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                    onClick={() => setModalRec(r)}
                  >
                    Generate Slip
                  </button>
                ) : (
                  <button
                    className="bg-green-600 text-white px-3 py-1 rounded"
                    onClick={() => handlePayNow(i)}
                  >
                    Pay Now
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <SalaryModal
        open={!!modalRec}
        onClose={() => setModalRec(null)}
        employee={employee}
        record={modalRec}
      />
    </div>
  );
};

export default SalaryHistory;
