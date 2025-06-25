
import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '@/hooks/useProducts';

const Assortiment = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-bakery-brown mx-auto"></div>
          <p className="mt-4 text-gray-600">Producten laden...</p>
        </div>
      </div>
    );
  }

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push({
      name: product.name,
      description: product.description || 'Heerlijk huisgemaakt product.',
      price: `€${product.price.toFixed(2)}`,
      image: product.image_url || "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    });
    return acc;
  }, {} as Record<string, Array<{name: string, description: string, price: string, image: string}>>);

  const ProductCard = ({ product }: { product: { name: string; description: string; price: string; image: string } }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-bakery-brown mb-3">{product.name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed text-sm font-light">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-bakery-gold">{product.price}</span>
          <Link 
            to="/contact"
            className="bg-bakery-brown text-white px-6 py-2 rounded-full text-sm hover:bg-bakery-warm-brown transition-colors duration-200 font-medium"
          >
            Bestellen
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-bakery-brown mb-6">
            Ons Assortiment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Ontdek onze verse dagelijkse producten. Van klassiek brood tot unieke taarten - 
            alles wordt met liefde en vakmanschap bereid.
          </p>
        </div>

        {/* Brood Section */}
        {groupedProducts.brood && (
          <section className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-bakery-brown">Brood</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {groupedProducts.brood.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Taarten Section */}
        {groupedProducts.taarten && (
          <section className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-bakery-brown">Taarten</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {groupedProducts.taarten.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Gebak Section */}
        {groupedProducts.gebak && (
          <section className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-bakery-brown">Gebak & Koekjes</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {groupedProducts.gebak.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <div className="bg-bakery-light-cream rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-bakery-brown mb-6">
            Speciale Wensen?
          </h3>
          <p className="text-xl text-gray-700 mb-8 font-light">
            Heeft u speciale wensen voor een taart of andere producten? 
            Neem contact met ons op en we denken graag met u mee!
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-bakery-brown text-white px-12 py-4 rounded-full font-semibold hover:bg-bakery-warm-brown transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Opnemen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Assortiment;
