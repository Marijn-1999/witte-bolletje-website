
import React from 'react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bakery-cream to-bakery-light-cream py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bakery-brown mb-6 leading-tight">
                Welkom bij<br />
                <span className="text-bakery-gold">Het Witte Bolletje</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Al sinds 1985 bakken wij met liefde en passie de lekkerste broden, 
                taarten en gebakjes voor onze gemeenschap. Elke dag vers, 
                elke dag met zorg bereid.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-bakery-brown text-white px-8 py-3 rounded-lg font-semibold hover:bg-bakery-warm-brown transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Bekijk Assortiment
                </button>
                <button className="border-2 border-bakery-brown text-bakery-brown px-8 py-3 rounded-lg font-semibold hover:bg-bakery-brown hover:text-white transition-colors duration-200">
                  Neem Contact Op
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Verse bakkerij producten"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-bakery-gold text-bakery-brown px-6 py-3 rounded-lg font-bold shadow-lg">
                🥖 Dagelijks vers!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown mb-4">
              Onze Verhaal
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Drie generaties van ambachtelijke bakkers hebben hun kennis en 
              liefde voor het vak doorgegeven om u elke dag de beste kwaliteit te bieden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🍞</div>
              <h3 className="text-xl font-semibold text-bakery-brown mb-3">
                Ambachtelijk Brood
              </h3>
              <p className="text-gray-600">
                Onze broden worden dagelijks vers gebakken volgens traditionele recepten 
                die al generaties in onze familie worden doorgegeven.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎂</div>
              <h3 className="text-xl font-semibold text-bakery-brown mb-3">
                Verse Taarten
              </h3>
              <p className="text-gray-600">
                Van klassieke slagroomtaarten tot moderne creaties - 
                wij maken elke gelegenheid extra speciaal met onze taarten.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🍪</div>
              <h3 className="text-xl font-semibold text-bakery-brown mb-3">
                Heerlijk Gebak
              </h3>
              <p className="text-gray-600">
                Koekjes, croissants en ander lekker gebak - 
                perfect bij een kopje koffie of als tussendoortje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="bg-bakery-cream py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Onze bakkerij"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown mb-6">
                Kwaliteit & Traditie
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bij Het Witte Bolletje geloven we in kwaliteit boven kwantiteit. 
                We gebruiken alleen de beste ingrediënten en nemen de tijd die 
                nodig is om elk product tot in de perfectie te bereiden.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-bakery-gold mr-3 text-xl">✓</span>
                  <span className="text-gray-700">100% natuurlijke ingrediënten</span>
                </li>
                <li className="flex items-center">
                  <span className="text-bakery-gold mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Dagelijks vers gebakken</span>
                </li>
                <li className="flex items-center">
                  <span className="text-bakery-gold mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Lokale leveranciers</span>
                </li>
                <li className="flex items-center">
                  <span className="text-bakery-gold mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Geen kunstmatige toevoegingen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
