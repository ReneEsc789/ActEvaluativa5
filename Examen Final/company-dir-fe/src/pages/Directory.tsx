
import Avatar from '../components/Avatar';
import StatusToggle from '../components/StatusToggle';

// TODO: Import useEffect and useState hoocks
import { useEffect, useState } from 'react';
// TODO: Import useNavigate from the router package
import { useNavigate } from 'react-router-dom';
// TODO: Import getEmployees from the api layer
import { getEmployees } from '../api/employees';

export default function Directory() {
  // TODO: Use useNavigate to enable row navigation
  const navigate = useNavigate();

  // TODO: Create a state variable for employees
  const [employees, setEmployees] = useState<Employee[]>([]);

  // TODO: Use useEffect to fetch employees from the API when the component mounts
  useEffect (() => {
    getEmployees().then((res) => setEmployees(res.data));
  }, [])


  const handleToggle = (updated: Employee) => {
    // TODO: Update the employees state with the updated employee
    // For example: setEmployees((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));
    setEmployees((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));
  };

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Employee Directory</h1>
        <p className="text-slate-500 text-sm mt-1">
         {employees.length} found
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-left">
                <th className="px-6 py-4 font-semibold text-slate-600 tracking-wide">Employee</th>
                <th className="px-6 py-4 font-semibold text-slate-600 tracking-wide">Position</th>
                <th className="px-6 py-4 font-semibold text-slate-600 tracking-wide">Department</th>
                <th className="px-6 py-4 font-semibold text-slate-600 tracking-wide">Email</th>
                <th className="px-6 py-4 font-semibold text-slate-600 tracking-wide">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-600 tracking-wide text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {employees.map((employee) => (
                <tr key="1" className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar name= {employee.name} imageUrl= {employee.imageUrl} />
                      <span className="font-medium text-slate-900 whitespace-nowrap">{employee.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{employee.position}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-semibold capitalize">
                      {employee.department.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{employee.email}</td>
                  <td className="px-6 py-4">
                    <StatusToggle employee= {employee} onToggle={handleToggle} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    {/* TODO: Add onClick to navigate to EmployeeDetail page using useNavigate */}
                    <button onClick={() => navigate(`/directory/${employee.id}`)}
                    className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors">
                      View
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
