import React, { useRef, useState } from "react";
import salaryData from "../../utils/salaryData";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SalaryDashboard = ({ employeeName }) => {
  const employee = salaryData.find(
    (emp) => emp.name.toLowerCase() === employeeName.toLowerCase()
  );

  const [selectedRecord, setSelectedRecord] = useState(null);
  const slipRef = useRef(null);

  const paidRecords = employee.records.filter((r) => r.status === "Paid");
  const pendingCount = employee.records.length - paidRecords.length;
  const totalPaid = paidRecords.reduce((acc, rec) => acc + rec.amount, 0);

  const pieData = [
    { name: "Paid", value: paidRecords.length, color: "#22c55e" },
    { name: "Pending", value: pendingCount, color: "#ef4444" },
  ];

  const handlePrint = () => {
    const printContent = slipRef.current.innerHTML;
    const newWindow = window.open("", "", "width=800,height=600");
    newWindow.document.write(`
      <html>
        <head>
          <title>Salary Slip</title>
          <style>
            body { font-family: Arial; padding: 20px; }
            .header { font-size: 20px; font-weight: bold; margin-bottom: 10px; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            th, td { border: 1px solid #444; padding: 8px; text-align: left; }
            .highlight { color: green; font-weight: bold; }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    newWindow.close();
  };

  return (
    <div className="mt-6 text-white">
      <h3 className="text-lg font-semibold mb-4 text-yellow-400">
        Salary Breakdown for {employee.name}
      </h3>

      {/* Salary Components */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {Object.entries(employee.salaryBreakdown).map(([key, value]) => (
          <div key={key} className="bg-[#2b2b2b] px-4 py-3 rounded shadow text-sm">
            <span className="capitalize text-gray-300">{key}</span>
            <h4 className="text-lg font-medium text-green-400">₹{value}</h4>
          </div>
        ))}
      </div>

      {/* Salary Table */}
      <div className="overflow-auto max-h-96 mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-yellow-500 text-black">
              <th className="py-2 px-4">Month</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Paid Date</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.records.map((rec, index) => (
              <tr key={index} className="bg-[#111] border-b border-gray-700 text-center">
                <td className="py-2 px-4">{rec.month}</td>
                <td className="py-2 px-4">₹{rec.amount}</td>
                <td className={`py-2 px-4 font-semibold ${rec.status === "Paid" ? "text-green-400" : "text-red-400"}`}>
                  {rec.status}
                </td>
                <td className="py-2 px-4">
                  {rec.status === "Paid"
                    ? rec.paidDate ||
                      (() => {
                        const randomDay = Math.floor(Math.random() * 28) + 1;
                        return `${randomDay < 10 ? "0" + randomDay : randomDay} ${rec.month} 2025`;
                      })()
                    : "—"}
                </td>
                <td className="py-2 px-4">
                  {rec.status === "Paid" ? (
                    <button
                      className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700"
                      onClick={() => setSelectedRecord(rec)}
                    >
                      Generate Slip
                    </button>
                  ) : (
                    <span className="text-red-500 font-medium">Overdue</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Salary Slip Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg w-[90%] md:w-[600px] relative">
            <button
              onClick={() => setSelectedRecord(null)}
              className="absolute top-2 right-4 text-xl text-red-500 font-bold"
            >
              ×
            </button>

            <div ref={slipRef}>
              <h2 className="text-xl font-bold mb-2 text-center">Company XYZ Pvt. Ltd.</h2>
              <p className="text-center text-gray-600">123 Business Park, City - 400001</p>
              <hr className="my-3" />
              <h3 className="text-lg font-semibold mb-3 text-blue-600 text-center">
                Salary Slip - {selectedRecord.month}
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr><td><strong>Employee Name:</strong></td><td>{employee.name}</td></tr>
                  <tr><td><strong>Amount:</strong></td><td>₹{selectedRecord.amount}</td></tr>
                  <tr><td><strong>Status:</strong></td><td>{selectedRecord.status}</td></tr>
                  <tr><td><strong>Paid Date:</strong></td><td>{selectedRecord.paidDate}</td></tr>
                </tbody>
              </table>
              <h4 className="mt-4 mb-2 font-semibold">Breakdown</h4>
              <table className="w-full text-sm border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2">Component</th>
                    <th className="p-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(employee.salaryBreakdown).map(([key, val]) => (
                    <tr key={key}>
                      <td className="p-2 capitalize">{key}</td>
                      <td className="p-2">₹{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-4">
              <button
                onClick={handlePrint}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Print / Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="mb-6 mt-8">
        <h4 className="text-md font-semibold mb-2">Summary</h4>
        <div className="bg-[#2b2b2b] p-4 rounded text-sm">
          <p>Total Months Paid: <span className="text-green-400 font-semibold">{paidRecords.length}</span></p>
          <p>Total Pending: <span className="text-red-400 font-semibold">{pendingCount}</span></p>
          <p>Total Amount Paid: <span className="text-yellow-300 font-bold">₹{totalPaid}</span></p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="w-full h-[350px] mt-4 bg-[#1b1b1b] p-4 rounded">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {pieData.map((entry, idx) => (
                <Cell key={idx} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
            <Legend formatter={(value) => <span style={{ color: "white" }}>{value}</span>} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalaryDashboard;
