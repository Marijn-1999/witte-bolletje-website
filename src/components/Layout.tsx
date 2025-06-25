
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <footer className="bg-bakery-brown text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-bakery-gold rounded-full flex items-center justify-center">
                  <span className="text-bakery-brown font-bold text-lg">🥖</span>
                </div>
                <h3 className="text-xl font-bold">Het Witte Bolletje</h3>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Verse bakkerij producten sinds 1985. 
                Elke dag vers gebakken met liefde en vakmanschap.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>Hoofdstraat 123</p>
                <p>1234 AB Bakkerstad</p>
                <p>+31 12 345 6789</p>
                <p>info@hetwittebolletje.nl</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Openingstijden</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>Ma-Vr: 07:00 - 18:00</p>
                <p>Za: 07:00 - 17:00</p>
                <p>Zo: 08:00 - 16:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-bakery-warm-brown mt-8 pt-8 text-center">
            <p className="text-sm opacity-75">
              © 2024 Het Witte Bolletje. Alle rechten voorbehouden.
            </p>
            <Link 
              to="/admin" 
              className="text-xs opacity-50 hover:opacity-75 transition-opacity mt-2 inline-block"
            >
              Admin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
