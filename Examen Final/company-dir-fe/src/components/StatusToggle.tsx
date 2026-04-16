// TODO: Import useState from react
// TODO: Import updateEmployee from ../api/employees

interface StatusToggleProps {
  employee: Employee;
  onToggle: () => void;
}

export default function StatusToggle({ employee, onToggle }: StatusToggleProps) {
  // TODO: Add a loading state to disable the button while the request is in progress
  //   const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    // TODO: Call updateEmployee to toggle the active status
    // TODO: Call onToggle with the updated employee once the request succeeds
    onToggle();
  };

  return (
    <button
      onClick={handleClick}
      title={employee.active ? 'Click to deactivate' : 'Click to activate'}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer disabled:opacity-50 ${
        employee.active
          ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${employee.active ? 'bg-emerald-500' : 'bg-slate-400'}`} />
      {employee.active ? 'Active' : 'Inactive'}
    </button>
  );
}
