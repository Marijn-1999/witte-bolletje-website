
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bakery-cream to-bakery-light-cream py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-bakery-brown mb-8 leading-tight">
                Welkom bij<br />
                <span className="text-bakery-gold">Het Witte Bolletje</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-light">
                Al sinds 1985 bakken wij met liefde en passie de lekkerste broden, 
                taarten en gebakjes voor onze gemeenschap.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/assortiment"
                  className="bg-bakery-brown text-white px-10 py-4 rounded-full font-semibold hover:bg-bakery-warm-brown transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  Bekijk Assortiment
                </Link>
                <Link 
                  to="/contact"
                  className="border-2 border-bakery-brown text-bakery-brown px-10 py-4 rounded-full font-semibold hover:bg-bakery-brown hover:text-white transition-all duration-300 text-center"
                >
                  Neem Contact Op
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Verse bakkerij producten"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white text-bakery-brown px-8 py-4 rounded-2xl font-bold shadow-2xl border-2 border-bakery-gold">
                🥖 Dagelijks vers gebakken!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assortiment Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-bakery-brown mb-6">
              Ons Assortiment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Verse producten, dagelijks met zorg bereid volgens traditionele recepten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Ambachtelijk brood"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-bakery-brown mb-3">
                Ambachtelijk Brood
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Onze broden worden dagelijks vers gebakken volgens traditionele recepten 
                die al generaties in onze familie worden doorgegeven.
              </p>
            </div>

            <div className="group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Verse taarten"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-bakery-brown mb-3">
                Verse Taarten
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Van klassieke slagroomtaarten tot moderne creaties - 
                wij maken elke gelegenheid extra speciaal met onze taarten.
              </p>
            </div>

            <div className="group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Heerlijk gebak"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-bakery-brown mb-3">
                Heerlijk Gebak
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Koekjes, croissants en ander lekker gebak - 
                perfect bij een kopje koffie of als tussendoortje.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/assortiment"
              className="inline-block bg-bakery-brown text-white px-12 py-4 rounded-full font-semibold hover:bg-bakery-warm-brown transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Bekijk Volledig Assortiment
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="bg-bakery-light-cream py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Onze bakkerij"
                className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-bakery-brown mb-8">
                Kwaliteit & Traditie
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-light">
                Bij Het Witte Bolletje geloven we in kwaliteit boven kwantiteit. 
                We gebruiken alleen de beste ingrediënten en nemen de tijd die 
                nodig is om elk product tot in de perfectie te bereiden.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-bakery-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">100% natuurlijke ingrediënten</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-bakery-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Dagelijks vers gebakken</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-bakery-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Lokale leveranciers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-bakery-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Geen kunstmatige toevoegingen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
