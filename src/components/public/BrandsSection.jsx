import React from 'react';

const BrandsSection = () => {
  const brands = [
    { id: 1, name: "Artesanías María", logo: "/placeholder-brand1.png" },
    { id: 2, name: "Cosméticos Naturales", logo: "/placeholder-brand2.png" },
    { id: 3, name: "Dulces Tradicionales", logo: "/placeholder-brand3.png" },
    { id: 4, name: "Joyas Hechas a Mano", logo: "/placeholder-brand4.png" },
    { id: 5, name: "Ropa Ecológica", logo: "/placeholder-brand5.png" },
    { id: 6, name: "Decoración Hogar", logo: "/placeholder-brand6.png" },
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Nuestros Emprendedores</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {brands.map((brand) => (
          <div key={brand.id} className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-3 overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
            </div>
            <h3 className="text-lg font-medium text-center">{brand.name}</h3>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="text-blue-600 font-medium hover:text-blue-800">
          Ver todos los emprendedores →
        </button>
      </div>
    </div>
  );
};

export default BrandsSection;