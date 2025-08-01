import React from 'react';

const DashboardPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Panel de Administración</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-medium text-gray-900 mb-2">Emprendedores</h3>
          <p className="text-3xl font-bold">24</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-medium text-gray-900 mb-2">Productos</h3>
          <p className="text-3xl font-bold">156</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-medium text-gray-900 mb-2">Ventas</h3>
          <p className="text-3xl font-bold">$12,450</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Actividad Reciente</h2>
        <p>Aquí irá el gráfico o lista de actividad reciente</p>
      </div>
    </div>
  );
};

// Esta línea es crucial - debe ser export default
export default DashboardPage;