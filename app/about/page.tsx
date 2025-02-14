'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const imageUrl = "https://www.atlas.edu.tr/wp-content/uploads/2024/02/software-engineering.jpg";

  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col">
      <Navbar />

      <section className="py-20 text-center text-white">
        <h1 className="text-6xl font-extrabold">Hakkımızda</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
        Nart Developer, işletmelerin ve bireylerin dijital dünyada güçlü bir varlık oluşturmasını sağlamak için kurulmuş yenilikçi bir yazılım ve web geliştirme şirketidir. Teknolojinin hızla geliştiği bu çağda, markanızı geleceğe taşıyan, ölçeklenebilir ve modern çözümler sunuyoruz. <br></br> <br></br> Her müşterimizin benzersiz olduğunu biliyor ve ihtiyaçlarına özel web siteleri, e-ticaret platformları ve özel yazılım çözümleri geliştiriyoruz. SEO uyumlu, mobil dostu ve yüksek performanslı altyapılarla işletmelerin dijital dünyada rekabet gücünü artırıyoruz.
        </p>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative bg-gradient-to-r from-blue-500 to-green-500 h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:from-green-500 hover:to-blue-500">
            <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-md rounded-md flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-black">Misyonumuz</h2>
                <p className="mt-4 text-black">
                  Müşterilerimize en yüksek kalite standartlarında ürünler sunmak ve onların beklentilerini aşmak.
                </p>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-r from-blue-500 to-green-500 h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:from-green-500 hover:to-blue-500">
            <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-md rounded-md flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-black">Vizyonumuz</h2>
                <p className="mt-4 text-black">
                  Sektördeki en son trendleri takip ederek, yenilikçi ve sürdürülebilir çözümler sunmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center mb-4">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative bg-gradient-to-r from-blue-500 to-green-500 h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:from-green-500 hover:to-blue-500">
              <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-md rounded-md flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-black">Kalite</h3>
                  <p className="mt-2 text-black">En yüksek kalite standartlarına bağlı kalıyoruz.</p>
                </div>
              </div>
            </div>
            <div className="relative bg-gradient-to-r from-blue-500 to-green-500 h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:from-green-500 hover:to-blue-500">
              <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-md rounded-md flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-black">Güvenilirlik</h3>
                  <p className="mt-2 text-black">Müşterilerimize her zaman şeffaf ve dürüst yaklaşıyoruz.</p>
                </div>
              </div>
            </div>
            <div className="relative bg-gradient-to-r from-blue-500 to-green-500 h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:from-green-500 hover:to-blue-500">
              <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-md rounded-md flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-black">Yenilikçilik</h3>
                  <p className="mt-2 text-black">Sürekli gelişen teknoloji ve trendleri takip ediyoruz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center mb-4">Takımımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              <img src="https://www.atlas.edu.tr/wp-content/uploads/2024/02/software-engineering.jpg" alt="Ali Yılmaz" className="w-full h-32 object-cover rounded-t-md" />
              <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-b-md flex items-center justify-center h-32">
                <h3 className="text-xl font-semibold text-black">Baha Nart Şenel</h3>
                <p className="mt-2 text-black">Founder</p>
              </div>
            </div>
            <div className="relative h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              <img src="https://www.atlas.edu.tr/wp-content/uploads/2024/02/software-engineering.jpg" alt="Ayşe Demir" className="w-full h-32 object-cover rounded-t-md" />
              <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-b-md flex items-center justify-center h-32">
                <h3 className="text-xl font-semibold text-black">Şadan Efe Öz</h3>
                <p className="mt-2 text-black">Takım Lideri</p>
              </div>
            </div>
            <div className="relative h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              <img src="https://www.atlas.edu.tr/wp-content/uploads/2024/02/software-engineering.jpg" alt="Mehmet Öz" className="w-full h-32 object-cover rounded-t-md" />
              <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-b-md flex items-center justify-center h-32">
                <h3 className="text-xl font-semibold text-black">Emirhan Şen</h3>
                <p className="mt-2 text-black">Tasarımcı</p>
              </div>
            </div>
            <div className="relative h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              <img src="https://www.atlas.edu.tr/wp-content/uploads/2024/02/software-engineering.jpg" alt="Fatma Korkmaz" className="w-full h-32 object-cover rounded-t-md" />
              <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-b-md flex items-center justify-center h-32">
                <h3 className="text-xl font-semibold text-black">Oğuzhan Kavuncuoğlu</h3>
                <p className="mt-2 text-black">Pazarlama Uzmanı</p>
              </div>
            </div>
            <div className="relative h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              <img src="https://www.atlas.edu.tr/wp-content/uploads/2024/02/software-engineering.jpg" alt="Emre Çelik" className="w-full h-32 object-cover rounded-t-md" />
              <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-b-md flex items-center justify-center h-32">
                <h3 className="text-xl font-semibold text-black">Bora Bedirhan Sarıhan</h3>
                <p className="mt-2 text-black">Yazılım Geliştirme</p>
              </div>
            </div>
            <div className="relative h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              <img src="https://www.atlas.edu.tr/wp-content/uploads/2024/02/software-engineering.jpg" alt="Zeynep Arslan" className="w-full h-32 object-cover rounded-t-md" />
              <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-b-md flex items-center justify-center h-32">
                <h3 className="text-xl font-semibold text-black">Ahmet Bedirhan Pilatin</h3>
                <p className="mt-2 text-black">Muhasebeci</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 