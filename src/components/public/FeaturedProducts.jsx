import React from 'react';
import ProductCard from '@/components/common/ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Mermelada Artesanal",
      entrepreneur: "Dulces de la Abuela",
      price: 8.99,
      rating: 4.5,
      image: "/placeholder-product1.jpg"
    },
    {
      id: 2,
      name: "Bolso de Tela Reciclada",
      entrepreneur: "EcoAccesorios",
      price: 24.99,
      rating: 4.8,
      image: "/placeholder-product2.jpg"
    },
    {
      id: 3,
      name: "Jabones Naturales",
      entrepreneur: "Aromas del Campo",
      price: 5.50,
      rating: 4.2,
      image: "/placeholder-product3.jpg"
    },
    {
      id: 4,
      name: "Collar de Semillas",
      entrepreneur: "Joyas Naturales",
      price: 15.99,
      rating: 4.7,
      image: "/placeholder-product4.jpg"
    }
  ];

  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Productos Destacados</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-100 rounded-lg font-medium">Más vendidos</button>
          <button className="px-4 py-2 rounded-lg font-medium">Nuevos</button>
          <button className="px-4 py-2 rounded-lg font-medium">Mejor valorados</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Ver todos los productos
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;