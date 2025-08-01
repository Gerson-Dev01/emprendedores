import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

const EntrepreneurHeader = ({ setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-4">
        <button
          type="button"
          className="text-gray-500 md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <HiOutlineMenu className="h-6 w-6" />
        </button>
        
        <div className="text-xl font-bold text-gray-800">Mi Tienda</div>
        
        <div className="flex items-center">
          <div className="ml-4 bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
        </div>
      </div>
    </header>
  );
};

// Asegúrate de tener esta línea:
export default EntrepreneurHeader;