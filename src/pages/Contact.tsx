
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Bericht verzonden!",
        description: "We nemen zo snel mogelijk contact met u op.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-bakery-brown mb-4">
            Contact
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Heeft u vragen, speciale wensen of wilt u een bestelling plaatsen? 
            Neem gerust contact met ons op!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-bakery-brown mb-6">
              Bezoek onze bakkerij
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-bakery-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-bakery-brown text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-bakery-brown mb-1">Adres</h3>
                  <p className="text-gray-600">
                    Hoofdstraat 123<br />
                    1234 AB Bakkerstad<br />
                    Nederland
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-bakery-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-bakery-brown text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-bakery-brown mb-1">Telefoon</h3>
                  <p className="text-gray-600">012-3456789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-bakery-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-bakery-brown text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-bakery-brown mb-1">Email</h3>
                  <p className="text-gray-600">info@hetwittebolletje.nl</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-bakery-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-bakery-brown text-xl">🕒</span>
                </div>
                <div>
                  <h3 className="font-semibold text-bakery-brown mb-1">Openingstijden</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Maandag - Vrijdag: 7:00 - 18:00</p>
                    <p>Zaterdag: 7:00 - 17:00</p>
                    <p>Zondag: 8:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-bakery-cream rounded-lg">
              <h3 className="font-semibold text-bakery-brown mb-2">💡 Tip:</h3>
              <p className="text-sm text-gray-600">
                Voor speciale taarten en grote bestellingen raden wij aan om 
                minimaal 48 uur van tevoren te bestellen.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-bakery-brown mb-6">
              Stuur ons een bericht
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bakery-gold focus:border-transparent transition-colors duration-200"
                  placeholder="Uw volledige naam"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bakery-gold focus:border-transparent transition-colors duration-200"
                  placeholder="uw.email@voorbeeld.nl"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bakery-gold focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Wat kunnen we voor u betekenen? Beschrijf uw vraag of wens..."
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  isFormValid && !isSubmitting
                    ? 'bg-bakery-brown text-white hover:bg-bakery-warm-brown shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Versturen...
                  </span>
                ) : (
                  'Bericht Versturen'
                )}
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              * Verplichte velden. We behandelen uw gegevens vertrouwelijk en 
              gebruiken deze alleen om contact met u op te nemen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
