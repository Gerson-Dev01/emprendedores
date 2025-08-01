import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/public/HomePage';
import ProductListPage from '@/pages/public/ProductListPage';
import ProductDetailPage from '@/pages/public/ProductDetailPage';
import EntrepreneurListPage from '@/pages/public/EntrepreneurListPage';
import EntrepreneurProfilePage from '@/pages/public/EntrepreneurProfilePage';
import BlogPage from '@/pages/public/BlogPage';
import ContactPage from '@/pages/public/ContactPage';
import CartPage from '@/pages/public/CartPage';
import CheckoutPage from '@/pages/public/CheckoutPage';
import NotFoundPage from '@/pages/public/NotFoundPage';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="productos" element={<ProductListPage />} />
      <Route path="producto/:id" element={<ProductDetailPage />} />
      <Route path="emprendedores" element={<EntrepreneurListPage />} />
      <Route path="emprendedor/:id" element={<EntrepreneurProfilePage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="contacto" element={<ContactPage />} />
      <Route path="carrito" element={<CartPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PublicRoutes;