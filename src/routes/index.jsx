import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout';
import AdminLayout from '@/layouts/AdminLayout';
import EntrepreneurLayout from '@/layouts/EntrepreneurLayout';
import PublicRoutes from '@/routes/PublicRoutes';
import AdminRoutes from '@/routes/AdminRoutes';
import EntrepreneurRoutes from '@/routes/EntrepreneurRoutes';
import LoginPage from '@/pages/public/LoginPage';
import RegisterPage from '@/pages/public/RegisterPage';
import { useAuth } from '@/context/AuthContext';

const AppRoutes = () => {
  const { user } = useAuth();
  
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<PublicRoutes />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registro" element={<RegisterPage />} />
        </Route>

        {/* Rutas de Administrador */}
        <Route 
          path="/admin/*" 
          element={
            user?.role === 'admin' ? 
            <AdminLayout /> : 
            <Navigate to="/login" replace />
          }
        >
          <Route index element={<AdminRoutes />} />
        </Route>

        {/* Rutas de Emprendedor */}
        <Route 
          path="/mi-tienda/*" 
          element={
            user?.role === 'entrepreneur' ? 
            <EntrepreneurLayout /> : 
            <Navigate to="/login" replace />
          }
        >
          <Route index element={<EntrepreneurRoutes />} />
        </Route>

        {/* 404 - Not Found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;