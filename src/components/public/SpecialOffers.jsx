import React from 'react';
import ProductCard from '@/components/common/ProductCard';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      name: "Pack de Velas Artesanales",
      entrepreneur: "Aromas del Hogar",
      price: 22.99,
      originalPrice: 29.99,
      discount: 23,
      endDate: "2023-12-15",
      image: "/placeholder-offer1.jpg"
    },
    {
      id: 2,
      name: "Set de Tazas Pintadas a Mano",
      entrepreneur: "Cerámica Creativa",
      price: 18.50,
      originalPrice: 24.99,
      discount: 26,
      endDate: "2023-12-20",
      image: "/placeholder-offer2.jpg"
    },
    {
      id: 3,
      name: "Bufanda de Lana Natural",
      entrepreneur: "Tejidos Andinos",
      price: 15.99,
      originalPrice: 21.99,
      discount: 27,
      endDate: "2023-12-18",
      image: "/placeholder-offer3.jpg"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Ofertas Especiales</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="relative">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                {offer.discount}% OFF
              </div>
              <ProductCard 
                product={{
                  ...offer,
                  price: offer.price,
                  rating: 4.5 // Valor por defecto para ofertas
                }} 
              />
              <div className="mt-2 text-sm text-gray-500">
                Termina en: {new Date(offer.endDate).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;