import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Apoya a emprendedores locales",
      description: "Descubre productos únicos hechos con pasión",
      cta: "Ver productos",
      entrepreneur: "Ana's Handmade",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Ofertas exclusivas",
      description: "20% de descuento en productos seleccionados",
      cta: "Ver ofertas",
      entrepreneur: "Variedad de emprendedores",
      bgColor: "bg-gradient-to-r from-blue-500 to-teal-400"
    },
    {
      id: 3,
      title: "Nuevos emprendedores",
      description: "Conoce las últimas incorporaciones a nuestra plataforma",
      cta: "Descubrir",
      entrepreneur: "Nuevos talentos",
      bgColor: "bg-gradient-to-r from-amber-500 to-yellow-300"
    }
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      navigation
      loop
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className={`${slide.bgColor} text-white py-16 md:py-24`}>
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-8">{slide.description}</p>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  {slide.cta}
                </button>
                <p className="mt-4 text-sm opacity-80">Por: {slide.entrepreneur}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;