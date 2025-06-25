
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast({
              title: "Fout bij inloggen",
              description: "Ongeldig e-mailadres of wachtwoord.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Fout bij inloggen",
              description: error.message,
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "Succesvol ingelogd",
            description: "Je bent nu ingelogd als admin.",
          });
          navigate('/admin');
        }
      } else {
        const { error } = await signUp(email, password);
        if (error) {
          if (error.message.includes('User already registered')) {
            toast({
              title: "Account bestaat al",
              description: "Er bestaat al een account met dit e-mailadres.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Fout bij registreren",
              description: error.message,
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "Account aangemaakt",
            description: "Je account is aangemaakt. Check je e-mail voor bevestiging.",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Er ging iets mis",
        description: "Probeer het opnieuw.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            {isLogin ? 'Admin Inloggen' : 'Admin Account Aanmaken'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin 
              ? 'Log in om de admin functies te gebruiken' 
              : 'Maak een admin account aan'
            }
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {isLogin ? 'Inloggen' : 'Registreren'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">E-mailadres</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                  placeholder="admin@hetwittebolletje.nl"
                />
              </div>
              
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
                  placeholder="Voer je wachtwoord in"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={loading}
              >
                {loading 
                  ? (isLogin ? 'Inloggen...' : 'Registreren...') 
                  : (isLogin ? 'Inloggen' : 'Account Aanmaken')
                }
              </Button>
            </form>
            
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                {isLogin 
                  ? 'Nog geen account? Registreer hier' 
                  : 'Al een account? Log hier in'
                }
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
