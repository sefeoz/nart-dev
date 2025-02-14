'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
export default function Products() {
  const projects = [
    {
      name: "FK Tekstil",
      description: "Yenilikçi tekstil çözümleri ile sektörde fark yaratıyoruz.",
      image: "https://images.unsplash.com/photo-1600585154320-1c1e1e1e1e1e",
    },
    {
      name: "Moda Dora",
      description: "Son moda trendleriyle dolu, şık ve zarif tasarımlar.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    },
    {
      name: "Vellichor Games",
      description: "Eşsiz oyun deneyimleri sunan yaratıcı bir oyun stüdyosu.",
      image: "https://images.unsplash.com/photo-1521791136060-1b0c1c1c1c1c",
    },
    {
      name: "Dedem Tur",
      description: "Unutulmaz seyahat deneyimleri için kaliteli tur hizmetleri.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-teal-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate__animated animate__fadeInDown">
              Nart Developer Web Siteleri
              <div className="h-1 w-24 bg-gradient-to-r from-gray-600 to-green-400 mx-auto mt-4 animate-gradient"></div>
            </h1>
            <p className="text-lg text-gray-300 mb-8 animate__animated animate__fadeInUp">
              Müşterilerimize en iyi web çözümlerini sunuyoruz. Her ihtiyaca uygun projelerimizle yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Projeler */}
      <section className="py-10">
        <div className="container-custom relative">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-2">Web Sitesi Projelerimiz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 mt-4">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
