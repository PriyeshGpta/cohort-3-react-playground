import { useState } from 'react';
import Login from '../pages/public/Login';
import AppRoutes from "../routes/AppRoutes";
import { ToastContainer, toast } from 'react-toastify';


function App() {

  return (
    <div className="min-h-screen">
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="dark" />
    </div>
  )
}

export default App
