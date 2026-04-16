
import Avatar from '../components/Avatar';
import StatusToggle from '../components/StatusToggle';

// TODO: Import useEffect and useState hoocks
// TODO: Import useNavigate from the router package
// TODO: Import getEmployees from the api layer

export default function Directory() {
  // TODO: Use useNavigate to enable row navigation

  // TODO: Create a state variable for employees

  // TODO: Use useEffect to fetch employees from the API when the component mounts


  const handleToggle = () => {
    // TODO: Update the employees state with the updated employee
    // For example: setEmployees((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));
  };

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Employee Directory</h1>
        <p className="text-slate-500 text-sm mt-1">
         1 employees found
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
                <tr key="1" className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar name="Alejandra Saavedra" imageUrl='https://randomuser.me/api/portraits/women/44.jpg' />
                      <span className="font-medium text-slate-900 whitespace-nowrap">Alejandra Saavedra</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 whitespace-nowrap">"Software Engineer"</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-semibold capitalize">
                      AI/ML Engineering
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Alex.Saavedra@gmail.com</td>
                  <td className="px-6 py-4">
                    <StatusToggle employee={{id: 1, name: "Alejandra Saavedra", position: "Software Engineer", email: "Alex.Saavedra@gmail.com", phone: "662-100-0001", active: true, imageUrl: "https://randomuser.me/api/portraits/women/44.jpg", departmentId: 1, department: {id: 1, name: "AI/ML Engineering"}}} onToggle={handleToggle} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    {/* TODO: Add onClick to navigate to EmployeeDetail page using useNavigate */}
                    <button className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors">
                      View
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
