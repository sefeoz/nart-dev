'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const contactInfo = [
    {
      title: "Adres",
      info: "Tekstilkent Mah. Ticaret Cad. No:123 İstanbul/Türkiye",
      icon: "📍"
    },
    {
      title: "Telefon",
      info: "+90 (212) 123 45 67",
      icon: "📞"
    },
    {
      title: "E-posta",
      info: "info@modadora.com",
      icon: "📧"
    },
    {
      title: "Çalışma Saatleri",
      info: "Pazartesi - Cumartesi: 09:00 - 18:00",
      icon: "⏰"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Dekoratif arka plan desenleri */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,114,182,0.12),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.12),transparent_50%)]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              İletişim
              <div className="h-1 w-24 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Sorularınız için bize ulaşın, en kısa sürede size dönüş yapalım.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="py-20 relative">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* İletişim Bilgileri */}
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20
                           hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.info}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Harita */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 overflow-hidden h-fit">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2755075277837!2d28.867843315414612!3d41.02757997929921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7a08cea8cd%3A0x1e6b2f2d8e8f4b6a!2sTextilkent!5e0!3m2!1str!2str!4v1645789456789!5m2!1str!2str"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 