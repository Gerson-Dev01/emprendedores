import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '@/pages/admin/DashboardPage';
import AdminEntrepreneurs from '@/pages/admin/EntrepreneursPage';
import AdminProducts from '@/pages/admin/ProductsPage';
import AdminOrders from '@/pages/admin/OrdersPage';
import AdminSettings from '@/pages/admin/SettingsPage';
import AdminReports from '@/pages/admin/ReportsPage';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route index element={<AdminDashboard />} />
      <Route path="emprendedores" element={<AdminEntrepreneurs />} />
      <Route path="productos" element={<AdminProducts />} />
      <Route path="pedidos" element={<AdminOrders />} />
      <Route path="configuracion" element={<AdminSettings />} />
      <Route path="reportes" element={<AdminReports />} />
    </Routes>
  );
};

export default AdminRoutes;