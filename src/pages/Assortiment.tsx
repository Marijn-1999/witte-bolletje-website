import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
}

const Assortiment = () => {
  const [products, setProducts] = useState<{
    brood: any[];
    taarten: any[];
    gebak: any[];
  }>({
    brood: [],
    taarten: [],
    gebak: []
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    // Load products from localStorage or use defaults
    const savedProducts = localStorage.getItem('bakery-products');
    if (savedProducts) {
      const allProducts: Product[] = JSON.parse(savedProducts);
      const groupedProducts = allProducts.reduce((acc: any, product: Product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push({
          name: product.name,
          description: getProductDescription(product.name),
          price: `€${product.price}`,
          image: getProductImage(product.name)
        });
        return acc;
      }, {});
      setProducts(groupedProducts);
    } else {
      // Use default products if none saved
      const defaultProducts: Product[] = [
        { id: 1, name: "Wit Brood", price: "2.50", category: "brood" },
        { id: 2, name: "Volkoren Brood", price: "3.20", category: "brood" },
        { id: 3, name: "Tijgerbrood", price: "3.50", category: "brood" },
        { id: 4, name: "Boerenbrood", price: "4.00", category: "brood" },
        { id: 5, name: "Slagroomtaart", price: "15.00", category: "taarten" },
        { id: 6, name: "Chocoladetaart", price: "18.00", category: "taarten" },
        { id: 7, name: "Verjaardag Taart", price: "25.00", category: "taarten" },
        { id: 8, name: "Appeltaart", price: "12.50", category: "taarten" },
        { id: 9, name: "Croissants", price: "2.00", category: "gebak" },
        { id: 10, name: "Koekjes Assortiment", price: "1.50", category: "gebak" },
        { id: 11, name: "Gevulde Koeken", price: "2.50", category: "gebak" },
        { id: 12, name: "Chocolade Eclairs", price: "3.00", category: "gebak" }
      ];
      
      // Save default products to localStorage
      localStorage.setItem('bakery-products', JSON.stringify(defaultProducts));
      
      const groupedProducts = defaultProducts.reduce((acc: any, product: Product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push({
          name: product.name,
          description: getProductDescription(product.name),
          price: `€${product.price}`,
          image: getProductImage(product.name)
        });
        return acc;
      }, {});
      setProducts(groupedProducts);
    }
  };

  const getProductDescription = (name: string) => {
    const descriptions: Record<string, string> = {
      "Wit Brood": "Ons klassieke witte brood, luchtig en zacht. Perfect voor de boterham.",
      "Volkoren Brood": "Gezond volkorenbrood vol vezels en voedingsstoffen.",
      "Tijgerbrood": "Knapperig brood met een unieke rijstkorst.",
      "Boerenbrood": "Stevig brood op zuurdesem basis, perfect voor hartige beleggen.",
      "Slagroomtaart": "Klassieke slagroomtaart met verse vruchten en luchtige slagroom.",
      "Chocoladetaart": "Rijke chocoladetaart met pure chocolade ganache.",
      "Verjaardag Taart": "Op maat gemaakte verjaardagstaarten in elke gewenste vorm.",
      "Appeltaart": "Traditionele Nederlandse appeltaart met kaneel en rozijnen.",
      "Croissants": "Boterrijke, knapperige croissants - perfect voor het ontbijt.",
      "Koekjes Assortiment": "Diverse huisgemaakte koekjes, dagelijks wisselend assortiment.",
      "Gevulde Koeken": "Traditionele gevulde koeken met amandelspijs.",
      "Chocolade Eclairs": "Luchtige eclairs gevuld met custard en bedekt met chocolade."
    };
    return descriptions[name] || "Heerlijk huisgemaakt product.";
  };

  const getProductImage = (name: string) => {
    const images: Record<string, string> = {
      "Wit Brood": "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "Volkoren Brood": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "Tijgerbrood": "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "Boerenbrood": "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "Slagroomtaart": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "Chocoladetaart": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "Verjaardag Taart": "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "Appeltaart": "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "Croissants": "https://images.unsplash.com/photo-1555507036-ab794f575c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "Koekjes Assortiment": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "Gevulde Koeken": "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "Chocolade Eclairs": "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    };
    return images[name] || "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
  };

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
        <section className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-bakery-brown">Brood</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.brood?.map((product: any, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>

        {/* Taarten Section */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-bakery-brown">Taarten</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.taarten?.map((product: any, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>

        {/* Gebak Section */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-bakery-brown">Gebak & Koekjes</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.gebak?.map((product: any, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>

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
