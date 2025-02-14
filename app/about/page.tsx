'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function About() {
  const stats = [
    { number: "15+", text: "Yıllık Deneyim" },
    { number: "1000+", text: "Mutlu Müşteri" },
    { number: "500+", text: "Ürün Çeşidi" },
    { number: "50+", text: "İş Ortağı" }
  ];

  const values = [
    {
      title: "Kalite",
      description: "En yüksek kalite standartlarında üretim ve hizmet sunuyoruz.",
      icon: "✨"
    },
    {
      title: "Güvenilirlik",
      description: "Müşterilerimize her zaman şeffaf ve dürüst yaklaşıyoruz.",
      icon: "🤝"
    },
    {
      title: "Yenilikçilik",
      description: "Sektördeki en son trendleri ve teknolojileri takip ediyoruz.",
      icon: "💡"
    },
    {
      title: "Sürdürülebilirlik",
      description: "Çevre dostu üretim süreçleri ve malzemeler kullanıyoruz.",
      icon: "🌱"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Dekoratif arka plan desenleri */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_50%)]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hakkımızda
              <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              2008 yılından beri tekstil sektöründe kaliteli ürün ve hizmet sunmanın gururunu yaşıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-20 relative">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-violet-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hikayemiz */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/50 to-purple-900/50"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Hikayemiz
                <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-4"></div>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Moda Dora, 2008 yılında tekstil sektöründe kaliteli ürün ve hizmet sunma vizyonuyla yola çıktı. 
                Yıllar içinde edindiğimiz deneyim ve bilgi birikimimizle, müşterilerimize en iyi hizmeti 
                sunmaya devam ediyoruz.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Sürekli gelişen teknoloji ve değişen moda trendlerini yakından takip ederek, 
                müşterilerimize en yeni ve kaliteli ürünleri sunuyoruz.
              </p>
            </div>
            <div className="relative">
              <Image 
                width={1000}
                height={1000}
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
                alt="Atölyemiz"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-20 relative">
        <div className="container-custom relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Değerlerimiz
            <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 