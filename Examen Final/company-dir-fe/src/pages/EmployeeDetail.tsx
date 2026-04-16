import Field from '../components/Field';

// TODO: Import useEffect and useState from react
// TODO: Import useParams and useNavigate from the router package
// TODO: Import getEmployeeById from the api layer


export default function EmployeeDetail() {
    // TODO: Use useNavigate to go back to the directory
    
    //TODO: Get the id from the URL params using a hook

   // TODO: Create a state variable to store the employee data


  // TODO: Use useEffect to fetch the employee by id when the component mounts

  // TODO: Return null while the employee data is not yet available
  // For example: if (!employee) return null;

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* TODO: Add onClick to navigate back to /directory using useNavigate */}
      <button className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 font-medium mb-8 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Back to Directory
      </button>

      {/* Canvas card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Banner */}
        <div className="h-28 sm:h-40 bg-gradient-to-r from-indigo-500 to-violet-600" />

        {/* Profile section */}
        <div className="px-6 sm:px-10 pb-10">
          {/* Avatar */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-14 sm:-mt-16 mb-6">
            {/* TODO: Show the employee image if available, otherwise show initials */}
            <img
              src='https://randomuser.me/api/portraits/women/44.jpg'
              alt='Alejandra Saavedra'
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-white shadow-md flex-shrink-0"
            />

            {/* TODO: Show Active or Inactive badge based on employee.active */}
            <span className="self-start sm:self-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
               Active
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">Alejandra Saavedra</h2>
          <p className="text-indigo-600 font-medium mb-8">Software Engineer</p>

          <div className="border-t border-slate-100 mb-8" />

          {/* TODO: Display the correct employee data in each Field */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Field
              label="Department"
              value="AI/ML Engineering"
            />
            <Field label="Email" value="Alex.Saavedra@gmail.com" />
            <Field label="Phone" value="662-100-0001" />
            <Field label="Employee ID" value="1" />
          </div>
        </div>
      </div>
    </main>
  );
}
