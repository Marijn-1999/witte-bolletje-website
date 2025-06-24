
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Simple password (in real app, this would be handled by backend)
  const ADMIN_PASSWORD = 'bakkerij2024';

  useEffect(() => {
    // Check if already authenticated
    const authStatus = localStorage.getItem('admin-auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      loadProducts();
    }
  }, []);

  const loadProducts = () => {
    // Load products from localStorage or use defaults
    const savedProducts = localStorage.getItem('bakery-products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      // Default products
      const defaultProducts = [
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
      setProducts(defaultProducts);
      localStorage.setItem('bakery-products', JSON.stringify(defaultProducts));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin-auth', 'true');
      loadProducts();
      toast({
        title: "Ingelogd",
        description: "Je bent succesvol ingelogd als admin.",
      });
    } else {
      toast({
        title: "Onjuist wachtwoord",
        description: "Het ingevoerde wachtwoord is niet correct.",
        variant: "destructive",
      });
    }
    setPassword('');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin-auth');
    toast({
      title: "Uitgelogd",
      description: "Je bent uitgelogd uit het admin panel.",
    });
  };

  const handlePriceUpdate = (productId: number, newPrice: string) => {
    const updatedProducts = products.map(product => 
      product.id === productId ? { ...product, price: newPrice } : product
    );
    setProducts(updatedProducts);
    localStorage.setItem('bakery-products', JSON.stringify(updatedProducts));
    toast({
      title: "Prijs bijgewerkt",
      description: "De productprijs is succesvol aangepast.",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Admin Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Voer het admin wachtwoord in
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <Label htmlFor="password">Wachtwoord</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
                placeholder="Voer admin wachtwoord in"
              />
            </div>
            <Button type="submit" className="w-full">
              Inloggen
            </Button>
          </form>
        </div>
      </div>
    );
  }

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Admin Panel</h1>
          <Button onClick={handleLogout} variant="outline">
            Uitloggen
          </Button>
        </div>

        <div className="space-y-8">
          {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-2xl capitalize">
                  {category === 'brood' ? 'Brood' : 
                   category === 'taarten' ? 'Taarten' : 'Gebak & Koekjes'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryProducts.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onPriceUpdate={handlePriceUpdate}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, onPriceUpdate }: { 
  product: any; 
  onPriceUpdate: (id: number, price: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editPrice, setEditPrice] = useState(product.price);

  const handleSave = () => {
    if (editPrice && parseFloat(editPrice) > 0) {
      onPriceUpdate(product.id, editPrice);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditPrice(product.price);
    setIsEditing(false);
  };

  return (
    <div className="border rounded-lg p-4 space-y-3">
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Prijs:</span>
        {isEditing ? (
          <div className="flex items-center space-x-2">
            <span>€</span>
            <Input
              type="number"
              step="0.01"
              min="0"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
              className="w-20"
            />
          </div>
        ) : (
          <span className="font-semibold text-lg">€{product.price}</span>
        )}
      </div>
      <div className="flex space-x-2">
        {isEditing ? (
          <>
            <Button size="sm" onClick={handleSave}>
              Opslaan
            </Button>
            <Button size="sm" variant="outline" onClick={handleCancel}>
              Annuleren
            </Button>
          </>
        ) : (
          <Button size="sm" onClick={() => setIsEditing(true)}>
            Bewerken
          </Button>
        )}
      </div>
    </div>
  );
};

export default Admin;
