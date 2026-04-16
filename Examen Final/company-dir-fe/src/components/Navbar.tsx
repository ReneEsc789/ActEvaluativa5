import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-indigo-600 text-white'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-lg font-semibold text-indigo-600 tracking-tight">
            Company Directory
          </span>
          <div className="flex gap-1">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            {/* TODO: Add a NavLink to /directory */}
          </div>
        </div>
      </div>
    </nav>
  );
}
