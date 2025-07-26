import { Outlet } from '@tanstack/react-router';
import NaveBar from './Components/NaveBar.jsx';
import { useEffect } from "react";
import AxiosInstance from "./utils/AxiosInstance";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './store/slice/authSlice.js';
import { useNavigate } from '@tanstack/react-router';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate({ to: '/auth' });
  };

  useEffect(() => {
    AxiosInstance.get("/api/ping").catch(() => { });
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <NaveBar isLoggedIn={isAuthenticated} onLogout={handleLogout} />
      <main className="flex-1 overflow-auto bg-gray-100 p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;