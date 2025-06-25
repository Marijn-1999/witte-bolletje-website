
-- Create products table to store all bakery products
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy that allows everyone to read products (for public display)
CREATE POLICY "Everyone can view products" 
  ON public.products 
  FOR SELECT 
  USING (true);

-- Create policy that only authenticated users can insert products
CREATE POLICY "Authenticated users can insert products" 
  ON public.products 
  FOR INSERT 
  TO authenticated
  WITH CHECK (true);

-- Create policy that only authenticated users can update products
CREATE POLICY "Authenticated users can update products" 
  ON public.products 
  FOR UPDATE 
  TO authenticated
  USING (true);

-- Create policy that only authenticated users can delete products
CREATE POLICY "Authenticated users can delete products" 
  ON public.products 
  FOR DELETE 
  TO authenticated
  USING (true);

-- Insert default products
INSERT INTO public.products (name, price, category, description, image_url) VALUES
  ('Wit Brood', 2.50, 'brood', 'Ons klassieke witte brood, luchtig en zacht. Perfect voor de boterham.', 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'),
  ('Volkoren Brood', 3.20, 'brood', 'Gezond volkorenbrood vol vezels en voedingsstoffen.', 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'),
  ('Tijgerbrood', 3.50, 'brood', 'Knapperig brood met een unieke rijstkorst.', 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'),
  ('Boerenbrood', 4.00, 'brood', 'Stevig brood op zuurdesem basis, perfect voor hartige beleggen.', 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'),
  ('Slagroomtaart', 15.00, 'taarten', 'Klassieke slagroomtaart met verse vruchten en luchtige slagroom.', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'),
  ('Chocoladetaart', 18.00, 'taarten', 'Rijke chocoladetaart met pure chocolade ganache.', 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'),
  ('Verjaardag Taart', 25.00, 'taarten', 'Op maat gemaakte verjaardagstaarten in elke gewenste vorm.', 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'),
  ('Appeltaart', 12.50, 'taarten', 'Traditionele Nederlandse appeltaart met kaneel en rozijnen.', 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'),
  ('Croissants', 2.00, 'gebak', 'Boterrijke, knapperige croissants - perfect voor het ontbijt.', 'https://images.unsplash.com/photo-1555507036-ab794f575c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'),
  ('Koekjes Assortiment', 1.50, 'gebak', 'Diverse huisgemaakte koekjes, dagelijks wisselend assortiment.', 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'),
  ('Gevulde Koeken', 2.50, 'gebak', 'Traditionele gevulde koeken met amandelspijs.', 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'),
  ('Chocolade Eclairs', 3.00, 'gebak', 'Luchtige eclairs gevuld met custard en bedekt met chocolade.', 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
