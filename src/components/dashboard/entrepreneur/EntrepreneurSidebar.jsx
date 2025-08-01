import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineChartBar, HiOutlineShoppingBag, HiOutlineCog } from 'react-icons/hi';

const EntrepreneurSidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { name: 'Dashboard', icon: HiOutlineChartBar, href: '/mi-tienda' },
    { name: 'Mis Productos', icon: HiOutlineShoppingBag, href: '/mi-tienda/productos' },
    { name: 'Configuración', icon: HiOutlineCog, href: '/mi-tienda/configuracion' },
  ];

  return (
    <div className={`bg-gray-800 text-white w-64 min-h-screen transition-all duration-300 ${
      isOpen ? 'ml-0' : '-ml-64'
    }`}>
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">Mi Tienda</h2>
      </div>
      
      <nav className="mt-5">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default EntrepreneurSidebar;