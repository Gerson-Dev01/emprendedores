// src/pages/public/HomePage.jsx
import React from 'react';
import HeroCarousel from '@/components/public/HeroCarousel';
import BrandsSection from '@/components/public/BrandsSection';
import CategoriesGrid from '@/components/public/CategoriesGrid';
import FeaturedProducts from '@/components/public/FeaturedProducts';
import SpecialOffers from '@/components/public/SpecialOffers';
import Testimonials from '@/components/public/Testimonials';
import BlogSection from '@/components/public/BlogSection';
import Newsletter from '@/components/public/Newsletter';

const HomePage = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Sección Hero con Carrusel */}
      <section>
        <HeroCarousel />
      </section>

      {/* Sección de Marcas (Emprendedores) */}
      <section className="container mx-auto px-4">
        <BrandsSection />
      </section>

      {/* Sección de Categorías */}
      <section className="container mx-auto px-4">
        <CategoriesGrid />
      </section>

      {/* Productos Destacados */}
      <section className="container mx-auto px-4">
        <FeaturedProducts />
      </section>

      {/* Ofertas Especiales */}
      <section className="container mx-auto px-4">
        <SpecialOffers />
      </section>

      {/* Testimonios */}
      <section className="container mx-auto px-4">
        <Testimonials />
      </section>

      {/* Blog/Consejos */}
      <section className="container mx-auto px-4">
        <BlogSection />
      </section>

      {/* Newsletter */}
      <section>
        <Newsletter />
      </section>
    </div>
  );
};

export default HomePage;