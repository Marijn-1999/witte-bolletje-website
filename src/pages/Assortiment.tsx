
import React from 'react';

const Assortiment = () => {
  const products = {
    brood: [
      {
        name: "Wit Brood",
        description: "Ons klassieke witte brood, luchtig en zacht. Perfect voor de boterham.",
        price: "€2,50"
      },
      {
        name: "Volkoren Brood",
        description: "Gezond volkorenbrood vol vezels en voedingsstoffen.",
        price: "€3,20"
      },
      {
        name: "Tijgerbrood",
        description: "Knapperig brood met een unieke rijstkorst.",
        price: "€3,50"
      },
      {
        name: "Boerenbrood",
        description: "Stevig brood op zuurdesem basis, perfect voor hartige beleggen.",
        price: "€4,00"
      }
    ],
    taarten: [
      {
        name: "Slagroomtaart",
        description: "Klassieke slagroomtaart met verse vruchten en luchtige slagroom.",
        price: "vanaf €15,00"
      },
      {
        name: "Chocoladetaart",
        description: "Rijke chocoladetaart met pure chocolade ganache.",
        price: "vanaf €18,00"
      },
      {
        name: "Verjaardag Taart",
        description: "Op maat gemaakte verjaardagstaarten in elke gewenste vorm.",
        price: "vanaf €25,00"
      },
      {
        name: "Appeltaart",
        description: "Traditionele Nederlandse appeltaart met kaneel en rozijnen.",
        price: "€12,50"
      }
    ],
    gebak: [
      {
        name: "Croissants",
        description: "Boterrijke, knapperige croissants - perfect voor het ontbijt.",
        price: "€2,00"
      },
      {
        name: "Koekjes Assortiment",
        description: "Diverse huisgemaakte koekjes, dagelijks wisselend assortiment.",
        price: "€1,50 p/st"
      },
      {
        name: "Gevulde Koeken",
        description: "Traditionele gevulde koeken met amandelspijs.",
        price: "€2,50"
      },
      {
        name: "Chocolade Eclairs",
        description: "Luchtige eclairs gevuld met custard en bedekt met chocolade.",
        price: "€3,00"
      }
    ]
  };

  const ProductCard = ({ product }: { product: { name: string; description: string; price: string } }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-bakery-brown mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-3 leading-relaxed">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-bakery-gold">{product.price}</span>
        <button className="bg-bakery-brown text-white px-4 py-2 rounded-lg text-sm hover:bg-bakery-warm-brown transition-colors duration-200">
          Bestellen
        </button>
      </div>
    </div>
  );

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-bakery-brown mb-4">
            Ons Assortiment
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ontdek onze verse dagelijkse producten. Van klassiek brood tot unieke taarten - 
            alles wordt met liefde en vakmanschap bereid.
          </p>
        </div>

        {/* Brood Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <span className="text-4xl mr-4">🍞</span>
            <h2 className="text-3xl font-bold text-bakery-brown">Brood</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.brood.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>

        {/* Taarten Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <span className="text-4xl mr-4">🎂</span>
            <h2 className="text-3xl font-bold text-bakery-brown">Taarten</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.taarten.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>

        {/* Gebak Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <span className="text-4xl mr-4">🍪</span>
            <h2 className="text-3xl font-bold text-bakery-brown">Gebak & Koekjes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.gebak.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-bakery-cream rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-bakery-brown mb-4">
            Speciale Wensen?
          </h3>
          <p className="text-gray-700 mb-6">
            Heeft u speciale wensen voor een taart of andere producten? 
            Neem contact met ons op en we denken graag met u mee!
          </p>
          <button className="bg-bakery-brown text-white px-8 py-3 rounded-lg font-semibold hover:bg-bakery-warm-brown transition-colors duration-200 shadow-lg hover:shadow-xl">
            Contact Opnemen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assortiment;
