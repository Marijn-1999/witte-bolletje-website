
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useProducts } from '@/hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Admin = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const { products, loading: productsLoading, updateProductPrice } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  if (authLoading || productsLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-bakery-brown mx-auto"></div>
          <p className="mt-4 text-gray-600">Laden...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth page
  }

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600 mt-2">Ingelogd als: {user.email}</p>
          </div>
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
                      onPriceUpdate={updateProductPrice}
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
  onPriceUpdate: (id: string, price: number) => Promise<boolean>;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editPrice, setEditPrice] = useState(product.price.toString());
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    const newPrice = parseFloat(editPrice);
    if (newPrice && newPrice > 0) {
      setSaving(true);
      const success = await onPriceUpdate(product.id, newPrice);
      if (success) {
        setIsEditing(false);
      }
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditPrice(product.price.toString());
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
          <span className="font-semibold text-lg">€{product.price.toFixed(2)}</span>
        )}
      </div>
      <div className="flex space-x-2">
        {isEditing ? (
          <>
            <Button 
              size="sm" 
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? 'Opslaan...' : 'Opslaan'}
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={handleCancel}
              disabled={saving}
            >
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
