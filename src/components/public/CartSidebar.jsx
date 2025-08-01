import React from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { useCart } from '@/context/CartContext';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, cartTotal, removeFromCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50" 
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-6 border-b">
              <h2 className="text-lg font-medium text-gray-900">Tu Carrito</h2>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <HiOutlineX className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full py-12">
                  <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
                  <button 
                    onClick={onClose}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                  >
                    Continuar comprando
                  </button>
                </div>
              ) : (
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex py-6 px-4">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                      </div>
                      
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p>${item.price.toFixed(2)}</p>
                        </div>
                        
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Cantidad: {item.quantity}</p>
                          
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="font-medium text-red-600 hover:text-red-500"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>${cartTotal.toFixed(2)}</p>
                </div>
                <div className="mt-6">
                  <button
                    className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700"
                  >
                    Finalizar compra
                  </button>
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={onClose}
                    className="text-blue-600 font-medium hover:text-blue-500"
                  >
                    Continuar comprando
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;