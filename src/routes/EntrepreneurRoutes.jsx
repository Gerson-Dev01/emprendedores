import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EntrepreneurDashboard from '@/pages/entrepreneur/DashboardPage';
import MyProductsPage from '@/pages/entrepreneur/MyProductsPage';
import AddProductPage from '@/pages/entrepreneur/AddProductPage';
import EditProductPage from '@/pages/entrepreneur/EditProductPage';
import MyOrdersPage from '@/pages/entrepreneur/MyOrdersPage';
import MyStoreSettingsPage from '@/pages/entrepreneur/MyStoreSettingsPage';
import MyStatsPage from '@/pages/entrepreneur/MyStatsPage';

const EntrepreneurRoutes = () => {
  return (
    <Routes>
      <Route index element={<EntrepreneurDashboard />} />
      <Route path="productos" element={<MyProductsPage />} />
      <Route path="productos/nuevo" element={<AddProductPage />} />
      <Route path="productos/editar/:id" element={<EditProductPage />} />
      <Route path="pedidos" element={<MyOrdersPage />} />
      <Route path="configuracion" element={<MyStoreSettingsPage />} />
      <Route path="estadisticas" element={<MyStatsPage />} />
    </Routes>
  );
};

export default EntrepreneurRoutes;