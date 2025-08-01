import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/common/layout/Header';
import Footer from '@/components/common/layout/Footer';
import CartSidebar from '@/components/public/CartSidebar';
import { useCart } from '@/context/CartContext';

const PublicLayout = () => {
  const { isCartOpen, closeCart } = useCart();
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
      
      {/* Sidebar del carrito */}
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </div>
  );
};

export default PublicLayout;