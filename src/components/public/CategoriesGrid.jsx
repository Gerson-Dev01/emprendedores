import React from 'react';

const CategoriesGrid = () => {
  const categories = [
    { id: 1, name: "Alimentos", count: 45, icon: "🍎" },
    { id: 2, name: "Artesanías", count: 32, icon: "🧵" },
    { id: 3, name: "Belleza", count: 28, icon: "💄" },
    { id: 4, name: "Hogar", count: 51, icon: "🏠" },
    { id: 5, name: "Moda", count: 67, icon: "👗" },
    { id: 6, name: "Tecnología", count: 19, icon: "📱" },
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Explora por Categoría</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="font-medium text-lg mb-1">{category.name}</h3>
            <p className="text-gray-500 text-sm">{category.count} productos</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;