
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('category', { ascending: true })
        .order('name', { ascending: true });

      if (error) {
        console.error('Error fetching products:', error);
        toast({
          title: "Fout bij laden van producten",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Fout bij laden van producten",
        description: "Er ging iets mis bij het laden van de producten.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateProductPrice = async (productId: string, newPrice: number) => {
    try {
      const { error } = await supabase
        .from('products')
        .update({ price: newPrice })
        .eq('id', productId);

      if (error) {
        console.error('Error updating product:', error);
        toast({
          title: "Fout bij bijwerken prijs",
          description: error.message,
          variant: "destructive",
        });
        return false;
      }

      // Update local state
      setProducts(products.map(product => 
        product.id === productId 
          ? { ...product, price: newPrice }
          : product
      ));

      toast({
        title: "Prijs bijgewerkt",
        description: "De productprijs is succesvol aangepast.",
      });
      
      return true;
    } catch (error) {
      console.error('Error updating product:', error);
      toast({
        title: "Fout bij bijwerken prijs",
        description: "Er ging iets mis bij het bijwerken van de prijs.",
        variant: "destructive",
      });
      return false;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    refreshProducts: fetchProducts,
    updateProductPrice
  };
};
