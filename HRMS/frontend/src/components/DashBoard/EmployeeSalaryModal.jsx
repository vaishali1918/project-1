// components/Employee/EmployeeSalaryModal.jsx
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const EmployeeSalaryModal = ({ open, onClose, employee, record }) => {
  const slipRef = useRef();

  if (!open || !record || !employee) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
      <div className="bg-white text-black rounded-lg w-[90%] md:w-[600px] p-6 shadow-lg relative">
        <h2 className="text-xl font-bold mb-4 text-center">Salary Slip - {record.month}</h2>
        
        {/* Print Content */}
        <div ref={slipRef} className="text-sm leading-6 p-4 bg-gray-100 rounded border border-gray-300">
          <h3 className="font-semibold text-lg mb-2">🧾 Company XYZ Pvt Ltd</h3>
          <p><strong>Employee:</strong> {employee.name}</p>
          <p><strong>Month:</strong> {record.month}</p>
          <p><strong>Status:</strong> {record.status}</p>
          <p><strong>Paid Date:</strong> {record.paidDate || '—'}</p>
          <hr className="my-3" />
          <h4 className="font-semibold text-md mb-2">💰 Salary Components:</h4>
          {Object.entries(employee.salaryBreakdown).map(([key, value]) => (
            <div key={key} className="flex justify-between mb-1">
              <span className="capitalize">{key}</span>
              <span>₹{value}</span>
            </div>
          ))}
          <hr className="my-3" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{record.amount}</span>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-5">
          <ReactToPrint
            trigger={() => (
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                🖨️ Print
              </button>
            )}
            content={() => slipRef.current}
          />
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSalaryModal;
