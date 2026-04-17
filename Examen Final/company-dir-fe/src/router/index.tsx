import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Directory from '../pages/Directory';
import EmployeeDetail from '../pages/EmployeeDetail';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* TODO: Add the route for the directory page */}
      <Route path = "/directory" element = {<Directory />} />

      {/* TODO: Add the route for the employee detail page */}
      <Route path = "/directory/:id" element = {<EmployeeDetail />} />

    </Routes>
  );
}
