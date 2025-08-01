import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Enlaces',
      links: [
        { name: 'Inicio', href: '/' },
        { name: 'Productos', href: '/productos' },
        { name: 'Emprendedores', href: '/emprendedores' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Términos', href: '/terminos' },
        { name: 'Privacidad', href: '/privacidad' },
        { name: 'Cookies', href: '/cookies' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { name: 'Contacto', href: '/contacto' },
        { name: 'Preguntas Frecuentes', href: '/faqs' },
        { name: 'Centro de Ayuda', href: '/ayuda' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">TianquizSV</h2>
            <p className="mb-4">
              Plataforma para emprendedores que buscan vender sus productos y conectar con clientes.
            </p>
          </div>

          {/* Enlaces */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>© {currentYear} TianquizSV. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;