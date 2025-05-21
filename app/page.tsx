'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    // Sayfa yüklendiğinde otomatik kaydırma
    const handleScroll = () => {
      const kategoriElement = document.getElementById('kategori'); // Kategori bölümünün ID'si
      if (kategoriElement) {
        const kategoriOffset = kategoriElement.offsetTop; // Kategori bölümünün üst konumu
        if (window.scrollY >= kategoriOffset - 100) { // 100px aşağıda kaydırma
          window.requestAnimationFrame(() => {
            window.scrollTo({
              top: kategoriOffset,
              behavior: 'smooth' // Kaydırma animasyonu
            });
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll); // Scroll eventini dinle
    return () => {
      window.removeEventListener('scroll', handleScroll); // Temizleme işlemi
    };
  }, []);

  const scrollToCategory = () => {
    const kategoriElement = document.getElementById('kategori');
    if (kategoriElement) {
      const kategoriOffset = kategoriElement.offsetTop;
      window.scrollTo({
        top: kategoriOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="animate-fade-in">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black">
        <div className="absolute inset-0 z-10"></div>

        {/* Ana içerik */}
        <div className="container-custom relative z-30 mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Ana metin */}
            <div className="text-white space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#1e90ff]">
                Nart Developer
              </h1>
              <p className="block mt-2 bg-gradient-to-r from-[#1e90ff] to-[#32cd32] bg-clip-text text-transparent">
                İşletmenizi profesyonel bir seviyeye taşımak için modern, hızlı ve yenilikçi web siteleri geliştiriyoruz. Nart Developer olarak, markanızı dijitale uyarlayarak daha geniş kitlelere ulaşmanızı sağlıyor ve iş süreçlerinizi profesyonel hale getiriyoruz. 
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="/siparis" 
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold 
                           bg-gradient-to-r from-green-500 to-blue-500 rounded-full
                           hover:from-green-600 hover:to-blue-600 
                           transform hover:-translate-y-1 transition-all duration-300"
                >
                  Sipariş Oluştur
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Sağ taraf - İstatistikler */}
            <div className="grid grid-cols-2 gap-6 mt-12 md:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-[#1e90ff] mb-2">4+</div>
                <div className="text-white">Yıllık Deneyim</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-[#1e90ff] mb-2">100+</div>
                <div className="text-white">Mutlu Müşteri</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-[#1e90ff] mb-2">10+</div>
                <div className="text-white">Proje</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-[#1e90ff] mb-2">6</div>
                <div className="text-white">Ekibimiz</div>
              </div>
            </div>
          </div>

          {/* Alt bilgi şeridi */}
          <div className="absolute -bottom-100 left-0 right-0 flex justify-center mt-20">
            <div className="flex items-center gap-8 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-2xl">✨</span>
                <span className="text-white">Profesyonellik</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-2xl">🚀</span>
                <span className="text-white">Hız</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 text-2xl">🔒</span>
                <span className="text-white">Güvenlik</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Öne Çıkan Hizmetler */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-t from-gray-950 via-gray-900 to-black">
        <div className="absolute inset-0 z-10"></div>

        {/* Ana içerik */}
        <div className="container-custom relative z-30 mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-[#1e90ff] to-[#32cd32] bg-clip-text text-transparent mt-0">
              Öne Çıkan Hizmetlerimiz
              </h1>
            {/* Sol taraf - Ana metin */}
            <div className="text-white space-y-8 animate-fade-in">

            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              {
                title: "Profesyonel Web Geliştirme",
                description: "İşletmenize özel, modern ve kullanıcı dostu web siteleri tasarlıyoruz.",
                icon: "🌐",
                gradient: "from-blue-500 to-cyan-400",
                delay: "delay-0"
              },
              {
                title: "Güçlü & Hızlı Performans",
                description: "SEO uyumlu, mobil dostu ve yüksek performanslı web çözümleri sunuyoruz.",
                icon: "⚡",
                gradient: "from-indigo-500 to-purple-400",
                delay: "delay-200"
              },
              {
                title: "Hızlı Teslimat & Destek",
                description: "Projelerinizi en kısa sürede hayata geçiriyor, teknik destek sağlıyoruz.",
                icon: "🚀",
                gradient: "from-sky-500 to-blue-400",
                delay: "delay-400"
              },
              {
                title: "İşinizi Dijitale Taşıyoruz",
                description: "Dijital pazarlama, e-ticaret ve yazılım danışmanlığı ile büyümenizi sağlıyoruz.",
                icon: "📈",
                gradient: "from-sky-500 to-blue-400",
                delay: "delay-400"
              },
            ].map((hizmet, index) => (
              <div 
                key={index}
                className={`group bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 
                          hover:bg-white/30 transition-all duration-500 animate-fade-in ${hizmet.delay}`}
              >
                <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-3xl
                              bg-gradient-to-b from-gray-950 via-gray-900 to-black transform group-hover:scale-110 
                              transition-transform duration-500`}>
                  <span className="text-[#ffd700]">{hizmet.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1e90ff] mb-4">
                  {hizmet.title}
                </h3>
                <p className="block mt-2 text-black group-hover:bg-gradient-to-r from-[#1e90ff] to-[#32cd32] bg-clip-text group-hover:text-transparent">
                  {hizmet.description}
                </p>
                <div className="mt-6 opacity-0 transform translate-y-4 group-hover:opacity-100 
                              group-hover:translate-y-0 transition-all duration-300">
                  <a href="#" className="inline-flex items-center text-white hover:text-gray-300">
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Sürdürülebilirlik Bölümü */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black">
        <div className="absolute inset-0 z-10"></div>

        {/* Ana içerik */}
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Metin içeriği */}
            <div className="text-white space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Nart Developer 
                <span className="block mt-2 text-amber-200">İşletmenizi Geleceğe Taşıyoruz</span>
              </h2>
              <p className="text-lg text-amber-50 leading-relaxed">
              Nart Developer olarak, her sektöre ve her ihtiyaca uygun modern, hızlı ve etkili web siteleri geliştiriyoruz. İşletmenizi dijital çağa uyarlıyor, markanızı daha geniş kitlelere ulaştıracak profesyonel web çözümleri sunuyoruz.
              </p>
              <div className="pt-4">
                <a 
                  href="/about" 
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-amber-900 
                           bg-gradient-to-r from-amber-200 to-amber-300 rounded-full
                           hover:from-amber-300 hover:to-amber-400 
                           transform hover:-translate-y-1 transition-all duration-300"
                >
                  Daha Fazla Bilgi
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Sağ taraf - İstatistikler */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-[#1e90ff] mb-2">100%</div>
                <div className="text-amber-100">Proje Görevini Tamamlama</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-[#1e90ff] mb-2">100%</div>
                <div className="text-amber-100">Müşteri Memnuniyeti</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-[#1e90ff] mb-2">90%</div>
                <div className="text-amber-100">Hızlı Teslimat</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-[#1e90ff] mb-2">95%</div>
                <div className="text-amber-100">Tekrar Çalışma Oranı</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="kategori"> {/* Kategori bölümüne ID ekledim */}
        {/* Kategori içeriği buraya gelecek */}
      </div>
      <Footer />

      {/* Aşağı kaydırma oku */}
      <div 
        className="fixed bottom-4 right-4 cursor-pointer bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 transition animate-bounce"
        onClick={scrollToCategory}
        title="Aşağı Kaydır"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </main>
  );
}
