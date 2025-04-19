'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col">
      <Navbar />

      <section className="py-20 text-center text-white">
        <h1 className="text-6xl font-extrabold">Hakkımızda</h1>
        <div className="h-1 w-1/3 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4 animate-gradient"></div>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
        Nart Developer, işletmelerin ve bireylerin dijital dünyada güçlü bir varlık oluşturmasını sağlamak için kurulmuş yenilikçi bir yazılım ve web geliştirme şirketidir. Teknolojinin hızla geliştiği bu çağda, markanızı geleceğe taşıyan, ölçeklenebilir ve modern çözümler sunuyoruz. <br></br> <br></br> Her müşterimizin benzersiz olduğunu biliyor ve ihtiyaçlarına özel web siteleri, e-ticaret platformları ve özel yazılım çözümleri geliştiriyoruz. SEO uyumlu, mobil dostu ve yüksek performanslı altyapılarla işletmelerin dijital dünyada rekabet gücünü artırıyoruz.
        </p>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative bg-gradient-to-r from-blue-500 to-green-500 h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:from-green-500 hover:to-blue-500">
            <div className="absolute inset-0 overflow-hidden">
              <div className="bubble bg-blue-500 opacity-50"></div>
              <div className="bubble bg-green-500 opacity-50"></div>
              <div className="bubble bg-purple-500 opacity-50"></div>
            </div>
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
            <div className="absolute inset-0 overflow-hidden">
              <div className="bubble bg-blue-500 opacity-50"></div>
              <div className="bubble bg-green-500 opacity-50"></div>
              <div className="bubble bg-purple-500 opacity-50"></div>
            </div>
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
              <div className="absolute inset-0 overflow-hidden">
                <div className="bubble bg-blue-500 opacity-50"></div>
                <div className="bubble bg-green-500 opacity-50"></div>
                <div className="bubble bg-purple-500 opacity-50"></div>
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-md rounded-md flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-black">Kalite</h3>
                  <p className="mt-2 text-black">En yüksek kalite standartlarına bağlı kalıyoruz.</p>
                </div>
              </div>
            </div>
            <div className="relative bg-gradient-to-r from-blue-500 to-green-500 h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:from-green-500 hover:to-blue-500">
              <div className="absolute inset-0 overflow-hidden">
                <div className="bubble bg-blue-500 opacity-50"></div>
                <div className="bubble bg-green-500 opacity-50"></div>
                <div className="bubble bg-purple-500 opacity-50"></div>
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-md rounded-md flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-black">Güvenilirlik</h3>
                  <p className="mt-2 text-black">Müşterilerimize her zaman şeffaf ve dürüst yaklaşıyoruz.</p>
                </div>
              </div>
            </div>
            <div className="relative bg-gradient-to-r from-blue-500 to-green-500 h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:from-green-500 hover:to-blue-500">
              <div className="absolute inset-0 overflow-hidden">
                <div className="bubble bg-blue-500 opacity-50"></div>
                <div className="bubble bg-green-500 opacity-50"></div>
                <div className="bubble bg-purple-500 opacity-50"></div>
              </div>
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
            {[
              { name: 'Baha Nart Şenel', role: 'Founder' },
              { name: 'Şadan Efe Öz', role: 'Takım Lideri' },
              { name: 'Emirhan Şen', role: 'Tasarımcı' },
              { name: 'Oğuzhan Kavuncuoğlu', role: 'Pazarlama Uzmanı' },
              { name: 'Bora Bedirhan Sarıhan', role: 'Yazılım Geliştirme' },
              { name: 'Ahmet Bedirhan Pilatin', role: 'Muhasebeci' },
            ].map((member, index) => (
              <div key={index} className="relative h-64 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                <div className="relative w-full h-32">
                  <Image
                    src="/i.webp"
                    alt={member.name}
                    fill
                    className="object-cover rounded-t-md"
                  />
                </div>
                <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-b-md flex flex-col items-center justify-center h-32">
                  <h3 className="text-xl font-semibold text-black">{member.name}</h3>
                  <p className="mt-2 text-black">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .bubble {
          position: absolute;
          bottom: -100px;
          width: 200px;
          height: 200px;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: bubble 20s infinite;
          z-index: 1;
        }

        .bubble:nth-child(1) {
          left: 10%;
          animation-duration: 15s;
        }

        .bubble:nth-child(2) {
          left: 50%;
          animation-duration: 20s;
        }

        .bubble:nth-child(3) {
          left: 90%;
          animation-duration: 25s;
        }

        @keyframes bubble {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-500px) scale(1.2);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </main>
  );
} 