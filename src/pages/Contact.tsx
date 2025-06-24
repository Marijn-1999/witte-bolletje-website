
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    bericht: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier zou je de form data kunnen versturen
    console.log('Form data:', formData);
    // Reset form
    setFormData({ naam: '', email: '', bericht: '' });
    alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-bakery-brown mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Heeft u vragen of speciale wensen? Neem gerust contact met ons op. 
            We helpen u graag verder!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-bakery-brown mb-8">
              Stuur ons een bericht
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  id="naam"
                  name="naam"
                  value={formData.naam}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bakery-gold focus:border-transparent transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bakery-gold focus:border-transparent transition-all duration-200"
                  placeholder="uw.email@voorbeeld.nl"
                />
              </div>

              <div>
                <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="bericht"
                  name="bericht"
                  value={formData.bericht}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bakery-gold focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Vertel ons over uw wensen of stel uw vraag..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-bakery-brown text-white px-8 py-4 rounded-xl font-semibold hover:bg-bakery-warm-brown transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Verstuur Bericht
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-bakery-light-cream rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-bakery-brown mb-8">
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
                      1234 AB Bakkerstad
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-bakery-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-bakery-brown text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bakery-brown mb-1">Telefoon</h3>
                    <p className="text-gray-600">
                      <a href="tel:+31123456789" className="hover:text-bakery-brown transition-colors">
                        +31 12 345 6789
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-bakery-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-bakery-brown text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bakery-brown mb-1">E-mail</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@hetwittebolletje.nl" className="hover:text-bakery-brown transition-colors">
                        info@hetwittebolletje.nl
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-bakery-brown mb-6">
                Openingstijden
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Maandag - Vrijdag</span>
                  <span className="text-bakery-brown font-semibold">07:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Zaterdag</span>
                  <span className="text-bakery-brown font-semibold">07:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Zondag</span>
                  <span className="text-bakery-brown font-semibold">08:00 - 16:00</span>
                </div>
              </div>
            </div>

            <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Onze bakkerij van buiten"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
