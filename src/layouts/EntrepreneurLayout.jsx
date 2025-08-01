import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import EntrepreneurSidebar from '@/components/dashboard/entrepreneur/EntrepreneurSidebar';
import EntrepreneurHeader from '@/components/dashboard/entrepreneur/EntrepreneurHeader';

const EntrepreneurLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      <EntrepreneurSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <EntrepreneurHeader setSidebarOpen={setSidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default EntrepreneurLayout;