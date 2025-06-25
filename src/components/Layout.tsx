
import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-bakery-light-cream">
      <Navigation />
      <main>{children}</main>
      <footer className="bg-bakery-brown text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Het Witte Bolletje</h3>
            <p className="text-sm opacity-90">
              Verse bakkerij producten sinds 1985
            </p>
            <p className="text-sm opacity-75 mt-2">
              © 2024 Het Witte Bolletje. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
