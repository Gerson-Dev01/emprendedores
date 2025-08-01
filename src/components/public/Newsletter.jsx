import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Únete a nuestra comunidad</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Recibe ofertas exclusivas y consejos para emprendedores directamente en tu correo
        </p>
        <div className="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-900"
          />
          <button className="bg-blue-800 px-6 py-3 rounded-r-lg font-medium hover:bg-blue-900 transition-colors">
            Suscribirse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;