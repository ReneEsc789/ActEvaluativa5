import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRouter from './router';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <div className="flex-1 flex flex-col w-full">
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  );
}
