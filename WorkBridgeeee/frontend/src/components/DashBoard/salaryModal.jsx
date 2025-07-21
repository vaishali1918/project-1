import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const SalaryModal = ({ open, onClose, employee, record }) => {
  const printRef = useRef();

  if (!open || !record || !employee) return null;

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const win = window.open('', '', 'width=800,height=600');
    win.document.write(`
      <html>
        <head>
          <title>Salary Slip - ${employee.name}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h2, h3 { color: #333; margin-bottom: 5px; }
            .header { text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { padding: 10px; border: 1px solid #ccc; text-align: left; }
            .section-title { margin-top: 20px; font-weight: bold; }
            .footer { margin-top: 30px; font-size: 12px; text-align: center; }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
    win.document.close();
    win.print();
  };

  const breakdown = employee.salaryBreakdown || {};

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[95%] md:w-[700px] max-h-[95vh] overflow-y-auto relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-black text-2xl font-bold hover:text-red-600"
        >
          ×
        </button>

        {/* Preview content inside printRef */}
        <div ref={printRef} className="text-black">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">XYZ Technologies Pvt. Ltd.</h2>
            <p className="text-sm">123 Software Park, New Delhi, India</p>
            <p className="text-sm">Email: hr@xyztech.com | Phone: +91 9876543210</p>
            <hr className="my-4" />
          </div>

          <h3 className="text-xl font-semibold mb-2 text-center">Salary Slip</h3>

          <table className="w-full table-auto border border-gray-300 text-sm mb-6">
            <tbody>
              <tr>
                <th className="border px-4 py-2 text-left">Employee Name</th>
                <td className="border px-4 py-2">{employee.name}</td>
              </tr>
              <tr>
                <th className="border px-4 py-2 text-left">Month</th>
                <td className="border px-4 py-2">{record.month}</td>
              </tr>
              <tr>
                <th className="border px-4 py-2 text-left">Status</th>
                <td className={`border px-4 py-2 ${record.status === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                  {record.status}
                </td>
              </tr>
              <tr>
                <th className="border px-4 py-2 text-left">Paid Date</th>
                <td className="border px-4 py-2">{record.paidDate || '—'}</td>
              </tr>
              <tr>
                <th className="border px-4 py-2 text-left">Total Amount</th>
                <td className="border px-4 py-2">₹{record.amount}</td>
              </tr>
            </tbody>
          </table>

          <h4 className="font-semibold mb-2">Salary Breakdown</h4>
          <table className="w-full table-auto border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Component</th>
                <th className="border px-4 py-2">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-4 py-2">Base Salary</td><td className="border px-4 py-2">{breakdown.baseSalary}</td></tr>
              <tr><td className="border px-4 py-2">HRA</td><td className="border px-4 py-2">{breakdown.hra}</td></tr>
              <tr><td className="border px-4 py-2">Dearness Allowance (DA)</td><td className="border px-4 py-2">{breakdown.da}</td></tr>
              <tr><td className="border px-4 py-2">Medical</td><td className="border px-4 py-2">{breakdown.medical}</td></tr>
              <tr><td className="border px-4 py-2">Other Allowances</td><td className="border px-4 py-2">{breakdown.otherAllowances}</td></tr>
              <tr><td className="border px-4 py-2 text-red-600 font-semibold">Deductions</td><td className="border px-4 py-2 text-red-600">-{breakdown.deductions}</td></tr>
            </tbody>
          </table>

          <div className="footer mt-6 text-gray-600 text-sm">
            <p>This is a system-generated slip and does not require a physical signature.</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded"
          >
            🖨️ Print Slip
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SalaryModal;
