import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* TODO: Add the route for the directory page */}

      {/* TODO: Add the route for the employee detail page */}

    </Routes>
  );
}
